import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Properties 
export interface NavBarProps {
  userName: string;
}

export interface NavBarState {
  isLoggedIn : boolean
}


export class NavBar extends React.Component<NavBarProps, NavBarState>{

  constructor(props: NavBarProps) {
    super(props);
    this.state = { isLoggedIn: false,};

  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render(){
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
          <Navbar.Brand href="#home">Cars demo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {signIn}  
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}