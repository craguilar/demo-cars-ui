import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Properties 
export interface NavBarProps {
  userName: string;
}

export class NavBar extends React.Component<NavBarProps,{}>{

  render(){
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Cars demo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{this.props.userName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}