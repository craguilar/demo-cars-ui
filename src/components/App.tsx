import React from 'react';
import { CarList } from "./cars/CarsList";
import { About } from "./about/About";
import { Banner } from "./common/Banner";
import { NavBar } from "./common/NavBar";
import { Router,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Authentication
import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

// Routing
const history = createBrowserHistory()

const App: React.FC = () => {
  
  return (  
    <div className="App">
      <NavBar />
      <Banner />
      <Router history={history} >
        <Route exact path="/" component={CarList} />
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default withAuthenticator(App, true);
