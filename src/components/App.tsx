import React, { useEffect, useState } from 'react';
import { CarList } from "./cars/CarsList";
import { About } from "./about/About";
import { Banner } from "./common/Banner";
import { NavBar } from "./common/NavBar";
import { Router,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Authentication
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';

// Routing
const history = createBrowserHistory()


const App: React.FC = () => {
  
  const [currentUser,setCurrentUser] = useState('Anonymous');

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(authUser => {
        console.log(authUser)
        setCurrentUser(authUser.username)
      })
      .catch(error => {
        console.error(error)
      });
  }, []);

  return (  
    <div className="App">
      <NavBar />
      <Banner />
      <Router history={history} >
        <Route exact path="/" > <CarList userName={currentUser}/></Route>
        <Route exact path="/about"> <About/></Route>
      </Router>
    </div>
  );
}



export default withAuthenticator(App, true);
