import * as React from "react";
import { Car } from "./model/Car";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export interface CarDetailsProps {
  onSubmit: (event: any) => void,
  currentCar: Car
}

export interface CarDetailsState {
  image: string;
}

export class CarDetails extends React.Component<CarDetailsProps, CarDetailsState>{

  constructor(props: CarDetailsProps) {
    super(props);
    //this.state = { currentCar: {} as Car };
    this.state = { image: "" };
    this.addImage = this.addImage.bind(this);
  }

  addImage(image: any) {
    image.preventDefault();
    let url = URL.createObjectURL(image.target.files[0])
    this.setState({
      image: url
    })
    /*
    this.setState(prevState => {
      let car = Object.assign({}, prevState.currentCar);  // creating copy of state variable jasper
      car.image = url;                     // update the name property, assign a new value 
      return car;                                 // return new object jasper object
    })
    */
    console.log('You changed an image : ' + image.target);
  }

  render() {
    let rowsInControl = 3;
    return (
      <div>
        <Form onSubmit={this.props.onSubmit}>
          <Form.Group controlId="plateInput">
            <Form.Label column >
              Plates
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Enter your plate number" value={this.props.currentCar.plate} required />
            </Col>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="makeInput">
              <Form.Label column >
                Make
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Make" defaultValue={this.props.currentCar.make} required />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="modelInput">
              <Form.Label column>
                Model
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Model" defaultValue={this.props.currentCar.model} required />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="typeOfUseInput">
              <Form.Label>
                Type of use
              </Form.Label>
              <Form.Control as="select" defaultValue={this.props.currentCar.typeOfUse}>
                <option>Particular</option>
                <option>Company</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="nationalKeyInput">
              <Form.Label column >
                National key
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Tarjeta de circulacion" defaultValue={this.props.currentCar.nationalKey} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="serialNumberInput">
              <Form.Label column >
                Serial Number
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="" defaultValue={this.props.currentCar.serialNumber} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="engineSerialNumberInput">
              <Form.Label column >
                Engine serial number
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="" defaultValue={this.props.currentCar.engineSerialNumber} />
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="companyInput">
              <Form.Label >
                Company
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Companyt" defaultValue={this.props.currentCar.company} />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} controlId="descriptionInput">
            <Form.Label >
              Description
            </Form.Label>
            <Form.Control as="textarea" rows={rowsInControl} defaultValue={this.props.currentCar.description} />
          </Form.Group>
          <Form.Group as={Col}>
            <Button type="submit" >Submit</Button>
          </Form.Group>
        </Form>
      </div>);
  }
}