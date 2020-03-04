import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


// Properties 
export interface NavBarProps {
  userName: string;
}

export interface NavBarState {
  isLoggedIn: boolean
}


export class NavBar extends React.Component<NavBarProps, NavBarState>{


  constructor(props: NavBarProps) {

    super(props);
    this.state = { isLoggedIn: false };

  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let signIn;
    if (isLoggedIn) {
      signIn = <div>Signed in as: <a href="#login">{this.props.userName}</a></div>;
    } else {
      signIn = <div><a href="#login">Sign in</a></div>;
    }
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Cars demo</Navbar.Brand>
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