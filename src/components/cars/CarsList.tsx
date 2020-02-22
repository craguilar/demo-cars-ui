import * as React from "react";
import Table from "react-bootstrap/Table"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import { Car } from "./model/Car"
import { CarSummary } from "./model/CarSummary"
import { CarDetails } from "./CarDetails";
import { CarRepository } from "./CarRepository";
import Modal from "react-bootstrap/Modal";


// Properties 
export interface CarListProps {
  userName: string;
}
// State
export interface CarListState {
  cars: CarSummary[],
  showModal: boolean,
  typeOfOperation: string,
  currentCar: Car
}

/**
  * This class implements main cars logic .
  * The properties associated to it it are:
  *   - logged on userName
  * The state associated to it contains:
  *   - List of cars. 
  */
const NEW_TYPE_OF_OPERATION: string = 'New';
const UPDATE_TYPE_OF_OPERATION : string = 'Update';

export class CarList extends React.Component<CarListProps, CarListState> {


  repository = new CarRepository();
  carDetailsComponent: React.RefObject<CarDetails>;

  constructor(props: CarListProps) {
    super(props);
    this.state = { cars: [], showModal: false, typeOfOperation: NEW_TYPE_OF_OPERATION, currentCar: {} as Car };
    this.refreshList()
    this.carDetailsComponent = React.createRef();
    this.handleModalClose = this.handleModalClose.bind(this)
    this.onAddButtonClick = this.onAddButtonClick.bind(this)
  }

  handleModalClose() {
    this.setState({
      showModal: false
    })
  }

  refreshList() {
    this.repository.listCars(undefined, 10, '0', "ASC", undefined).then(results => {
      this.setState({
        cars: results
      })
    }).catch(error => {
      alert(error)
    })
  }

  onEditButtonClick(plate: string) {
    this.repository.getCar(plate).then(result=>{
      this.setState({
        showModal: true,
        typeOfOperation: UPDATE_TYPE_OF_OPERATION,
        currentCar: result
      })
    }).catch(error=>{
      alert(error)
    })
  }

  onAddButtonClick() {
    this.setState({
      showModal: true,
      typeOfOperation: NEW_TYPE_OF_OPERATION,
      currentCar: {} as Car
    })
  }

  onSubmitCarClick = (event: any) => {
    
    let elements = event.target.elements
    if (elements.length > 0) {
      let car = this.getCarFromForm(elements)
      this.handleCarUpdate(car)
    }
    this.setState({
      showModal: false
    })
    event.preventDefault()
  }

  handleCarUpdate(car: Car){
    if (this.state.typeOfOperation === NEW_TYPE_OF_OPERATION) {
      this.repository.addCar(car).then(result=>{
        this.refreshList()
      }).catch(error=>{
        alert(error)
      })
    } else {
      this.repository.updateCar(car).then(result => {
        this.refreshList()
      }).catch(error => {
        alert(error)
      })
    }
  }

  getCarFromForm(elements: any) {
    let plate = elements[0].value
    let make = elements[1].value
    let model = elements[2].value
    let typeOfUse = elements[3].value
    let nationalKey = elements[4].value
    let serialNumber = elements[5].value
    let engineSerialNumber = elements[6].value
    let company = elements[7].value
    let description = elements[8].value
    let car: Car = {
      plate: plate,
      make: make,
      model: model,
      typeOfUse: typeOfUse,
      nationalKey: nationalKey,
      serialNumber: serialNumber,
      engineSerialNumber: engineSerialNumber,
      company: company,
      description: description
    }
    return car
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

  populateTableCar() {
    return this.state.cars.map((car) => {
      return (
        <tr>
          <td>
            <Button key={car.plate} variant="primary" onClick={() => { this.onEditButtonClick(car.plate) }}>Edit</Button>
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
        <br />
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

        <Modal show={this.state.showModal} onHide={this.handleModalClose} size="lg" >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.typeOfOperation} car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CarDetails ref={this.carDetailsComponent} currentCar={this.state.currentCar} onSubmit={this.onSubmitCarClick} />
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}