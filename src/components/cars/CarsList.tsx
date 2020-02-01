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

  onButtonClick(plate: string) {
    console.log(plate);
  }
  
  populateListHeader() {
    return (
      <tr>
        <th>#</th>
        <th>Plate</th>
        <th>Make</th>
        <th>Model</th>
        <th>Description</th>
        <th>Type of use</th>
      </tr>
    )
  }

  populateListCar(){
    return this.cars.map((car)=>{
      return (
        <tr>
          <td>
            <Button key={car.plate} variant="info" onClick={()=>{this.onButtonClick(car.plate)}}>Edit</Button>
          </td>
          <td>{car.plate}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.description}</td>
          <td>{car.typeOfUse}</td>
        </tr>
      )
    })
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
              {this.populateListHeader()}
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