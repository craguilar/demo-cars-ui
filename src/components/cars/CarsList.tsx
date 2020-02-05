import * as React from "react";
import Table from "react-bootstrap/Table"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import {CarSummary} from "./model/CarSummary"
import { CarDetails } from "./CarDetails";

// Properties 
export interface CarListProps { 
  userName: string; 
}
// State
export interface CarListState { 
  cars: CarSummary[]
}

/**
  * This class implements main cars logic .
  * The properties associated to it it are:
  *   - logged on userName
  * The state associated to it contains:
  *   - List of cars. 
  */
export class CarList extends React.Component<CarListProps, CarListState> {

  carsTest: CarSummary[] = [
    { "plate": "CA-001", "make": "Audi", "model": "A3", "description": "Test","typeOfUse":"Particular"  },
    { "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular" },
  ]

  constructor(props: CarListProps) {
    super(props);
    this.state = { cars: this.carsTest };
  }

  onEditButtonClick(plate: string) {
    alert(plate);
  }

  onAddButtonClick(){
    alert('Add car');
  }
  
  onSubmitCarClick = () => {
    alert('Click happened')
  }
  
  populateTableHeader() {
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

  populateTableCar(){
    return this.state.cars.map((car)=>{
      return (
        <tr>
          <td>
            <Button key={car.plate} variant="primary" onClick={() => { this.onEditButtonClick(car.plate)}}>Edit</Button>
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
        <div style={{ textAlign: 'right' }}>
          <ButtonGroup aria-label="Tool bar">
            <Button variant="success" onClick={() => { this.onAddButtonClick() }}>+Add car</Button>
          </ButtonGroup>
        </div>
        <br/>
        <div>
          <Table striped bordered hover>
            <thead>
              {this.populateTableHeader()}
            </thead>
            <tbody>
              {this.populateTableCar()}
            </tbody>
          </Table>
        </div>
        <CarDetails typeOfForm="New" onSubmit={this.onSubmitCarClick} />
      </div>
    );
  }
}