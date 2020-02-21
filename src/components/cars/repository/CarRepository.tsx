
import { Car } from "../model/Car"
import { CarSummary } from "../model/CarSummary"

export class CarRepository {

  mockDataSummary: CarSummary[] = [
    { "plate": "CA-001", "make": "Audi", "model": "A3", "description": "Test", "typeOfUse": "Particular" },
    { "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular" },
  ];

  mockData: Car[] = [
    {
      "plate": "CA-001", "make": "Audi", "model": "A3", "description": "Test",
      "typeOfUse": "Particular", "nationalKey": "410003354", "serialNumber": "ZJL-123", "engineSerialNumber": "", "company": "New Eden"
    },
    {
      "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular",
      "nationalKey": "10008000", "serialNumber": "ZJL-222", "engineSerialNumber": "", "company": "Plan de Abajo"
    },
  ];

  constructor() {

  }

  listCars(): CarSummary[] {
    return this.mockDataSummary
  }

  addCar(car: Car): Car {
    this.mockData.push(car)
    return car
  }

  getCar(id: string): Car {
    return this.mockData.filter(x => x.plate == id)[0];
  }

}