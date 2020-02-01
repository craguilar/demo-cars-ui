import * as React from "react";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import {CarSummary} from "./model/CarSummary"

// Properties 
export interface CarListProps { 
  userName: string; 
}
// State
export interface CarListState { }



export class CarList extends React.Component<CarListProps, CarListState> {

  cars: CarSummary[] = [
    { "plate": "CA-001", "make": "Audi", "model": "A3", "description": "Test","typeOfUse":"Particular"  },
    { "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular" },
  ]

  populateListCar(){
    return(
      <tr>
        <td>
          <Button variant="info">Edit</Button>
        </td>
        <td>GLD-CA01</td>
        <td>Audi</td>
        <td>A3</td>
        <td>Test car</td>
        <td>Particular</td>
      </tr>
    )
  }

  render() {
 
    return (
      <div>
        <div>
          <h2>All cars for {this.props.userName} </h2>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Plate</th>
                <th>Make</th>
                <th>Model</th>
                <th>Description</th>
                <th>Type of use</th>
              </tr>
            </thead>
            <tbody>
              {this.populateListCar()}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}