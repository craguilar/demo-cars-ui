import React from 'react';

import { CarList } from "./cars/CarsList";
import { Banner } from "./common/Banner";
import { NavBar } from "./common/NavBar";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {

  const userName: string = "Carlos Ruiz"
  return (
    <div className="App">
      <NavBar userName={userName}/>
      <div>
        <Banner/>
        <CarList userName={userName} />
      </div>
    </div>
  );
}

export default App;
