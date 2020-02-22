
import { Car } from "./model/Car"
import { CarSummary } from "./model/CarSummary"
import { CarsApi } from "./typescript-fetch-client/api"

export class CarRepository {

  private fetchApi: CarsApi;

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

  listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string): Promise<any> {
    return this.fetchApi.listCars(fields, limit, page, sortOrder, sortBy, {});
  }

  listMockCars(){
    return this.mockDataSummary;
  }

  getCar(id: string): Promise<Car> {
    return this.fetchApi.getCar(id, undefined, undefined);
  }

  getMockCar(id: string): Car{
    return this.mockData.filter(x => x.plate === id)[0];
  }

  addCar(car: Car): Promise<Car> {
    return this.fetchApi.addCar(car, undefined)
  }

  addMockCar(car: Car): Car {
    this.mockData.push(car)
    return car
  }

  updateCar(car: Car): Promise<Car> {
   return this.fetchApi.updateCar(car,undefined)
  }

  updateMockCar(car: Car) : Car{
    let element = this.mockData.filter(x => x.plate === car.plate)[0]
    let index = this.mockData.indexOf(element)
    this.mockData[index] = car
    return car
  }

}