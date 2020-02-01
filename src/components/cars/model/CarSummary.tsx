/**
 * Main car object . 
 * @export
 * @interface CarSummary
 */
export interface CarSummary {
  /**
   * Car plate 
   * @type {string}
   * @memberof CarSummary
   */
  plate: string;
  /**
   * 
   * @type {string}
   * @memberof CarSummary
   */
  make: string;
  /**
   * 
   * @type {string}
   * @memberof CarSummary
   */
  model: string;
  /**
   * 
   * @type {string}
   * @memberof CarSummary
   */
  description?: string;
  /**
   * 
   * @type {string}
   * @memberof CarSummary
   */
  typeOfUse?: string;
}