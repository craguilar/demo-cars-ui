
import { Car } from "./model/Car"
import { CarSummary } from "./model/CarSummary"

export class CarRepository {

  mockData: CarSummary[] = [
    { "plate": "CA-001", "make": "Audi", "model": "A3", "description": "Test", "typeOfUse": "Particular" },
    { "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular" },
  ];

  constructor(){

  }

  listCars(): CarSummary[]{
    return this.mockData
  }


}