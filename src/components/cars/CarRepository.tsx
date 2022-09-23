
import { Car } from "./model/Car"
import { CarSummary } from "./model/CarSummary"
import { CarsApi } from "./typescript-fetch-client/api"
import api_details from '../../api-exports';
import { Configuration, ConfigurationParameters } from "./typescript-fetch-client/configuration";
import { Auth } from 'aws-amplify';

export class CarRepository {

  private apiConfigurationParams: ConfigurationParameters = {};

  /* Mock objects used for testing when API is not available */

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

  waitUser = () => Auth.currentSession().then((res: any) => {
    let accessToken = res.getAccessToken()
    let jwt = accessToken.getJwtToken()
    this.apiConfigurationParams = {
      basePath: api_details.base_endpoint,
      apiKey: (name: string) => jwt
    }
  })




  async listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string): Promise<any> {
    await this.waitUser()
    let api = new CarsApi(new Configuration(this.apiConfigurationParams));
    return api.listCars(fields, limit, page, sortOrder, sortBy, {});
  }

  listMockCars() {
    return this.mockDataSummary;
  }

  async getCar(id: string): Promise<Car> {
    await this.waitUser()
    let api = new CarsApi(new Configuration(this.apiConfigurationParams));
    return api.getCar(id, undefined, undefined);
  }

  getMockCar(id: string): Car {
    return this.mockData.filter(x => x.plate === id)[0];
  }

  async addCar(car: Car): Promise<Car> {
    await this.waitUser()
    let api = new CarsApi(new Configuration(this.apiConfigurationParams));
    return api.addCar(car, undefined)
  }

  addMockCar(car: Car): Car {
    this.mockData.push(car)
    return car
  }

  async updateCar(car: Car): Promise<Car> {
    await this.waitUser()
    let api = new CarsApi(new Configuration(this.apiConfigurationParams));
    return api.updateCar(car, undefined)
  }

  updateMockCar(car: Car): Car {
    let element = this.mockData.filter(x => x.plate === car.plate)[0]
    let index = this.mockData.indexOf(element)
    this.mockData[index] = car
    return car
  }

}