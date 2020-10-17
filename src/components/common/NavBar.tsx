import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Properties 
export interface NavBarProps {
}

export interface NavBarState {
}

export class NavBar extends React.Component<NavBarProps, NavBarState>{

  constructor(props: NavBarProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Cars demo app</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default NavBar