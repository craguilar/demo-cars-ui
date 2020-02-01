import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CarList } from "./cars/CarsList";
import { Banner } from "./announcements/Banner";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const userName: string = "Carlos Ruiz"
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Cars demo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">About</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{userName}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Banner/>
        <CarList userName={userName} />
      </div>
    </div>
    
  );

  
}

export default App;
