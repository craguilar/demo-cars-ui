import * as React from "react";
import {Car} from "./model/Car";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export interface CarDetailsProps {
  currentPlate: string
  onSubmit: (event: any) => void
}

export interface CarDetailsState {
  typeOfOperation : string
  currentCar: Car
  show: boolean
}

export class CarDetails extends React.Component<CarDetailsProps, CarDetailsState>{

  constructor(props: CarDetailsProps) {
    super(props);
    this.state = { typeOfOperation: "New", currentCar: {} as Car, show:false  };
  }

  handleClose(){
    this.setState({
      typeOfOperation :"New",
      show: false,
      currentCar : {} as Car
    })
  }

  handleShow(type :string , plate: string){
    this.setState({
      typeOfOperation : type,
      show: true
    })
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show}>
          <Modal.Header>
            <Modal.Title>{this.state.typeOfOperation} car</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.onSubmit}>
              <Form.Group controlId="plateInput">
                <Form.Label column >
                  Plates
                </Form.Label>
                <Col>
                  <Form.Control type="text" placeholder="Enter your plate number" required />
                </Col>
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="makeInput">
                  <Form.Label column >
                    Make
                </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Make" required  />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="modelInput">
                  <Form.Label column>
                    Model
                </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Model" required   />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="typeOfUseInput">
                  <Form.Label>
                    Type of use
                </Form.Label>
                  <Form.Control as="select">
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
                    <Form.Control type="text" placeholder="Provie tarjeta de circulacion" />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="serialNumberInput">
                  <Form.Label column >
                    Serial Number
                </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="engineSerialNumberInput">
                  <Form.Label column >
                    Engine serial number
                </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="companyInput">
                  <Form.Label >
                    Company
                </Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Company...t" />
                  </Col>
                </Form.Group>
              </Form.Row>
              <Form.Group as={Col} controlId="descriptionInput">
                <Form.Label >
                  Description
                </Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Form.Group as={Col}>
                <Button type="submit" >Submit</Button>
              </Form.Group>
            </Form> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>);
  }
}