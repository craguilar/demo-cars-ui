import { Image } from "./Image";

/**
 * Main car object . 
 * @export
 * @interface Car
 */
export interface Car {
  /**
   * Car plate 
   * @type {string}
   * @memberof Car
   */
  plate: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  make: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  model: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  description?: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  typeOfUse?: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  nationalKey?: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  serialNumber?: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  engineSerialNumber?: string;
  /**
   * 
   * @type {string}
   * @memberof Car
   */
  company?: string;

  /**
   * 
   * @type {Array<Image>}
   * @memberof Car
   */
  image? : string
  //images?: Array<typeof Image>;
}