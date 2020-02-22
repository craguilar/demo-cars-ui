
import { Car } from "./model/Car"
import { CarSummary } from "./model/CarSummary"
import { CarsApi } from "./typescript-fetch-client/api"

export class CarRepository {

  fetchApi: CarsApi;

  mockDataSummary: CarSummary[] = [
    { "plate": "GLD-CA01", "make": "Audi", "model": "A3", "description": "Test", "typeOfUse": "Particular" },
    { "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular" },
  ];

  mockData: Car[] = [
    {
      "plate": "GLD-CA01", "make": "Audi", "model": "A3", "description": "Test",
      "typeOfUse": "Particular", "nationalKey": "410003354", "serialNumber": "ZJL-123", "engineSerialNumber": "", "company": "New Eden"
    },
    {
      "plate": "MX-002", "make": "Mazda", "model": "Mazda 6", "description": "Test", "typeOfUse": "Particular",
      "nationalKey": "10008000", "serialNumber": "ZJL-222", "engineSerialNumber": "", "company": "Plan de Abajo"
    },
  ];

  constructor() {
    this.fetchApi = new CarsApi();
  }

  listCars(): Promise<any> {
    return this.fetchApi.listCars(undefined, 10, '0', "ASC", undefined, {});
  }

  addCar(car: Car): Car {
    this.mockData.push(car)
    return car
  }

  getCar(id: string): Car {
    return this.mockData.filter(x => x.plate === id)[0];
  }

}