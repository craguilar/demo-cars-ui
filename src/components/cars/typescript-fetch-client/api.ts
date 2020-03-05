/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Cars demo
 * CMesh API User Profile, previously known as user resume. 
 *
 * OpenAPI spec version: 20200201
 * Contact: caruizag@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Car } from "../model/Car";

import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "http://localhost:8080/20200201".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *  
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * 
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration = {};

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * 
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: string = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * CarsApi - fetch parameter creator
 * @export
 */
export const CarsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new Car
         * @param {Car} body New car to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCar(body: Car, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling addCar.');
            }
            const localVarPath = `/cars/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Car" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {string} carId 
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCar(carId: string, fields?: Array<string>, options: any = {}): FetchArgs {
            // verify required parameter 'carId' is not null or undefined
            if (carId === null || carId === undefined) {
                throw new RequiredError('carId', 'Required parameter carId was null or undefined when calling getCar.');
            }
            const localVarPath = `/cars/{carId}`
                .replace(`{${"carId"}}`, encodeURIComponent(String(carId)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {number} [limit] The maximum number of items to return in a paginated \&quot;List\&quot; call. Example: &#x60;500&#x60; 
         * @param {string} [page] The value of page to display. 
         * @param {'ASC' | 'DESC'} [sortOrder] The sort order to use, either ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;). The DISPLAYNAME sort order is case sensitive. 
         * @param {string} [sortBy] The field to sort by. You can provide one sort order (&#x60;sortOrder&#x60;). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some \&quot;List\&quot; operations (for example, &#x60;ListInstances&#x60;) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these \&quot;List\&quot; operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string, options: any = {}): FetchArgs {
            const localVarPath = `/cars/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarQueryParameter["token"]  = localVarApiKeyValue;
            }

            if (fields) {
                localVarQueryParameter['fields'] = fields;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (sortOrder !== undefined) {
                localVarQueryParameter['sortOrder'] = sortOrder;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sortBy'] = sortBy;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update car
         * @param {Car} body Car to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCar(body: Car, options: any = {}): FetchArgs {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body', 'Required parameter body was null or undefined when calling updateCar.');
            }
            const localVarPath = `/cars/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("Authorization")
                    : configuration.apiKey;
                localVarQueryParameter["token"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"Car" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body = needsSerialization ? JSON.stringify(body || {}) : (body || "");

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CarsApi - functional programming interface
 * @export
 */
export const CarsApiFp = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Add a new Car
         * @param {Car} body New car to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCar(body: Car, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Car> {
            const localVarFetchArgs = CarsApiFetchParamCreator(configuration).addCar(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {string} carId 
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCar(carId: string, fields?: Array<string>, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Car> {
            const localVarFetchArgs = CarsApiFetchParamCreator(configuration).getCar(carId, fields, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {number} [limit] The maximum number of items to return in a paginated \&quot;List\&quot; call. Example: &#x60;500&#x60; 
         * @param {string} [page] The value of page to display. 
         * @param {'ASC' | 'DESC'} [sortOrder] The sort order to use, either ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;). The DISPLAYNAME sort order is case sensitive. 
         * @param {string} [sortBy] The field to sort by. You can provide one sort order (&#x60;sortOrder&#x60;). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some \&quot;List\&quot; operations (for example, &#x60;ListInstances&#x60;) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these \&quot;List\&quot; operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
            const localVarFetchArgs = CarsApiFetchParamCreator(configuration).listCars(fields, limit, page, sortOrder, sortBy, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if ((response.status >= 200 && response.status < 300) || response.status === 404) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 
         * @summary Update car
         * @param {Car} body Car to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCar(body: Car, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Car> {
            const localVarFetchArgs = CarsApiFetchParamCreator(configuration).updateCar(body, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * CarsApi - factory interface
 * @export
 */
export const CarsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 
         * @summary Add a new Car
         * @param {Car} body New car to add
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addCar(body: Car, options?: any) {
            return CarsApiFp(configuration).addCar(body, options)(fetch, basePath);
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {string} carId 
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCar(carId: string, fields?: Array<string>, options?: any) {
            return CarsApiFp(configuration).getCar(carId, fields, options)(fetch, basePath);
        },
        /**
         * Get user details per user id  
         * @summary Get user details per user Id
         * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
         * @param {number} [limit] The maximum number of items to return in a paginated \&quot;List\&quot; call. Example: &#x60;500&#x60; 
         * @param {string} [page] The value of page to display. 
         * @param {'ASC' | 'DESC'} [sortOrder] The sort order to use, either ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;). The DISPLAYNAME sort order is case sensitive. 
         * @param {string} [sortBy] The field to sort by. You can provide one sort order (&#x60;sortOrder&#x60;). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some \&quot;List\&quot; operations (for example, &#x60;ListInstances&#x60;) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these \&quot;List\&quot; operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string, options?: any) {
            return CarsApiFp(configuration).listCars(fields, limit, page, sortOrder, sortBy, options)(fetch, basePath);
        },
        /**
         * 
         * @summary Update car
         * @param {Car} body Car to update
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCar(body: Car, options?: any) {
            return CarsApiFp(configuration).updateCar(body, options)(fetch, basePath);
        },
    };
};

/**
 * CarsApi - object-oriented interface
 * @export
 * @class CarsApi
 * @extends {BaseAPI}
 */
export class CarsApi extends BaseAPI {
    /**
     * 
     * @summary Add a new Car
     * @param {Car} body New car to add
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CarsApi
     */
    public addCar(body: Car, options?: any) {
        return CarsApiFp(this.configuration).addCar(body, options)(this.fetch, this.basePath);
    }

    /**
     * Get user details per user id  
     * @summary Get user details per user Id
     * @param {string} carId 
     * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CarsApi
     */
    public getCar(carId: string, fields?: Array<string>, options?: any) {
        return CarsApiFp(this.configuration).getCar(carId, fields, options)(this.fetch, this.basePath);
    }

    /**
     * Get user details per user id  
     * @summary Get user details per user Id
     * @param {Array<string>} [fields] Partial response refers to an optimization technique offered by the RESTful web APIs to return only the information  (fields) required by the client. In this mechanism, the client sends the required field names as the query parameters for an API to the server, and the server trims down the default response content by removing the fields that are not required by the client. The parameter used to control what fields to return should be a query string parameter called \&quot;fields\&quot; of type array, provide the values as enums, and usecollectionFormat 
     * @param {number} [limit] The maximum number of items to return in a paginated \&quot;List\&quot; call. Example: &#x60;500&#x60; 
     * @param {string} [page] The value of page to display. 
     * @param {'ASC' | 'DESC'} [sortOrder] The sort order to use, either ascending (&#x60;ASC&#x60;) or descending (&#x60;DESC&#x60;). The DISPLAYNAME sort order is case sensitive. 
     * @param {string} [sortBy] The field to sort by. You can provide one sort order (&#x60;sortOrder&#x60;). Default order for TIMECREATED is descending. Default order for DISPLAYNAME is ascending. The DISPLAYNAME sort order is case sensitive.  **Note:** In general, some \&quot;List\&quot; operations (for example, &#x60;ListInstances&#x60;) let you optionally filter by Availability Domain if the scope of the resource type is within a single Availability Domain. If you call one of these \&quot;List\&quot; operations without specifying an Availability Domain, the resources are grouped by Availability Domain, then sorted. 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CarsApi
     */
    public listCars(fields?: Array<string>, limit?: number, page?: string, sortOrder?: 'ASC' | 'DESC', sortBy?: string, options?: any) {
        return CarsApiFp(this.configuration).listCars(fields, limit, page, sortOrder, sortBy, options)(this.fetch, this.basePath);
    }

    /**
     * 
     * @summary Update car
     * @param {Car} body Car to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CarsApi
     */
    public updateCar(body: Car, options?: any) {
        return CarsApiFp(this.configuration).updateCar(body, options)(this.fetch, this.basePath);
    }

}
