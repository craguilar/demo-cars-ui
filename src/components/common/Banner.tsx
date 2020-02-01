import * as React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

export class Banner extends React.Component<{},{}>{
  render(){
    return (
      <div>
        <Jumbotron fluid>
          <h1>Welcome user!</h1>
        </Jumbotron>
      </div>
    );
  }
}