import * as React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export interface CarDetailsProps {
  typeOfForm: string;
  onSubmit: () => void
}

export interface CarDetailsState { }

export class CarDetails extends React.Component<CarDetailsProps, CarDetailsState>{
  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="plateForm">
            <Form.Label column >
              Plates
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder="Enter your plate number" />
            </Col>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label column >
                Make
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Make" />
              </Col>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label column>
                Model
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Model" />
              </Col>
            </Form.Group>
            <Form.Group as={Col}>
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
            <Form.Group as={Col}>
              <Form.Label column >
                National key
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label column >
                Serial Number
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label column >
                Engine serial number
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label >
                Company
            </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col}>
            <Form.Label >
              Description
            </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group as={Col}>
            <Button type="submit" onClick={this.props.onSubmit} >Submit</Button>
          </Form.Group>
        </Form>
      </div>);
  }
}