import { Str } from "./string";
import { EErrorType } from "@/enum/EErrorType";
import type { IPaginationResponse, IServiceResponse } from "@/interfaces/IHttp";

///handling error objects.
interface IError {
    message:string 
    code:EErrorType
}

/**
 * This class contain a basic implementation of Http methods for the nightfall project.
 */
export class Http {
    private static readonly timemout:number = 5000 //in ms.

    /**
     * A basic GET request returning ServiceResponse data
     * @param url 
     */
    public static getAsync = async<T>(url:string):Promise<IServiceResponse<T>> => {
        if(Str.isNullOrEmpty(url))
            return this.buildError({"code":EErrorType.BAD, "message":"empty url"});

        //handling HTTP timeout.
        const controller:AbortController = new AbortController();
        const signal = controller.signal;
        const timeout_id = setTimeout(() => {controller.abort()}, this.timemout);

        try {
            let body:IServiceResponse<T> | null = null;
            
            //api call.
            const response:Response = await fetch(url, {
                "method":'GET',
                "credentials":'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal
            })

            //handling errors.
            let contentType:(string | null) = response.headers.get('content-type');
            let isJson: boolean = contentType !== null && contentType.includes('application/json');
            
            if(isJson)
                body = await response.json() as IServiceResponse<T>;
            
            
            if(!response.ok) {
                if(body)
                    return this.buildError({"code":body.errorType, "message":body.message});
                
                return this.buildError({"code":EErrorType.BAD, "message":"an error occured"});
            }

            return body ? body : this.buildError({"code":EErrorType.BAD, "message":"an error occured"});
        }
        catch(error:any){
            if(error.name === 'AbortError')
                return this.buildError({"code":EErrorType.TIMEOUT, "message":"timeout error"});

            return this.buildError({"code":EErrorType.BAD, "message": "an error occured"});
        }
        finally {
            clearTimeout(timeout_id);
        }
    }

    /**
     * A basic GET request returning ServiceResponse data
     * @param url 
     */
    public static getPaginatedAsync = async<T>(url:string):Promise<IPaginationResponse<T>> => {
        if(Str.isNullOrEmpty(url))
            return this.buildPaginationError({"code":EErrorType.BAD, "message":"empty url"});

        //handling HTTP timeout.
        const controller:AbortController = new AbortController();
        const signal = controller.signal;
        const timeout_id = setTimeout(() => {controller.abort()}, this.timemout);

        try {
            let body:IPaginationResponse<T> | null = null;
            
            //api call.
            const response:Response = await fetch(url, {
                "method":'GET',
                "credentials":'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal
            })

            //handling errors.
            let contentType:(string | null) = response.headers.get('content-type');
            let isJson: boolean = contentType !== null && contentType.includes('application/json');
            
            if(isJson)
                body = await response.json() as IPaginationResponse<T>;
            
            
            if(!response.ok) {
                if(body)
                    return this.buildPaginationError({"code":body.errorType, "message":body.message});
                
                return this.buildPaginationError({"code":EErrorType.BAD, "message":"an error occured"});
            }

            return body ? body : this.buildPaginationError({"code":EErrorType.BAD, "message":"an error occured"});
        }
        catch(error:any){
            if(error.name === 'AbortError')
                return this.buildPaginationError({"code":EErrorType.TIMEOUT, "message":"timeout error"});

            return this.buildPaginationError({"code":EErrorType.BAD, "message": "an error occured"});
        }
        finally {
            clearTimeout(timeout_id);
        }
    }

     /**
     * A basic POST request returning ServiceResponse data
     * @param url 
     * @param data 
     */
    public static postAsync = async <T, U = any>(url: string, data: U): Promise<IServiceResponse<T>> => {
        if (Str.isNullOrEmpty(url))
            return this.buildError({ code: EErrorType.BAD, message: "empty url" });

        const controller: AbortController = new AbortController();
        const signal = controller.signal;
        const timeout_id = setTimeout(() => controller.abort(), this.timemout);

        try {
            let body: IServiceResponse<T> | null = null;

            const response: Response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                signal
            });

            const contentType = response.headers.get('content-type');
            const isJson = contentType !== null && contentType.includes('application/json');

            if (isJson)
                body = await response.json() as IServiceResponse<T>;

            if (!response.ok) {
                if (body)
                    return this.buildError({ code: body.errorType, message: body.message });

                return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
            }

            return body ?? this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        catch (error: any) {
            if (error.name === 'AbortError')
                return this.buildError({ code: EErrorType.TIMEOUT, message: "timeout error" });

            return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        finally {
            clearTimeout(timeout_id);
        }
    };

    /**
     * A basic PUT request returning ServiceResponse data
     * @param url 
     * @param data 
     */
    public static updateAsync = async <T, U = any>(url: string, data: U): Promise<IServiceResponse<T>> => {
        if (Str.isNullOrEmpty(url))
            return this.buildError({ code: EErrorType.BAD, message: "empty url" });

        const controller: AbortController = new AbortController();
        const signal = controller.signal;
        const timeout_id = setTimeout(() => controller.abort(), this.timemout);

        try {
            let body: IServiceResponse<T> | null = null;

            const response: Response = await fetch(url, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                signal
            });

            const contentType = response.headers.get('content-type');
            const isJson = contentType !== null && contentType.includes('application/json');

            if (isJson)
                body = await response.json() as IServiceResponse<T>;

            if (!response.ok) {
                if (body)
                    return this.buildError({ code: body.errorType, message: body.message });

                return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
            }

            return body ?? this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        catch (error: any) {
            if (error.name === 'AbortError')
                return this.buildError({ code: EErrorType.TIMEOUT, message: "timeout error" });

            return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        finally {
            clearTimeout(timeout_id);
        }
    };

    /**
     * A basic DELETE request returning ServiceResponse data
     * @param url 
     */
    public static deleteAsync = async <T>(url: string): Promise<IServiceResponse<T>> => {
        if (Str.isNullOrEmpty(url))
            return this.buildError({ code: EErrorType.BAD, message: "empty url" });

        const controller: AbortController = new AbortController();
        const signal = controller.signal;
        const timeout_id = setTimeout(() => controller.abort(), this.timemout);

        try {
            let body: IServiceResponse<T> | null = null;

            const response: Response = await fetch(url, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                signal
            });

            const contentType = response.headers.get('content-type');
            const isJson = contentType !== null && contentType.includes('application/json');

            if (isJson)
                body = await response.json() as IServiceResponse<T>;

            if (!response.ok) {
                if (body)
                    return this.buildError({ code: body.errorType, message: body.message });

                return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
            }

            return body ?? this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        catch (error: any) {
            if (error.name === 'AbortError')
                return this.buildError({ code: EErrorType.TIMEOUT, message: "timeout error" });

            return this.buildError({ code: EErrorType.BAD, message: "an error occurred" });
        } 
        finally {
            clearTimeout(timeout_id);
        }
    };



    /**
     * Generic error return.
     * @param e 
     * @returns 
     */
    private static buildError = (e:IError) => {
        return {
            "data":null,
            "message":e.message,
            "errorType":e.code
        };
    }

    /**
     * Generic pagination error.
     * @param e 
     * @returns 
     */
    private static buildPaginationError = (e:IError) => {
        return {
            "data":null,
            "message":e.message,
            "errorType":e.code,
            "totalCount":0,
            "pageNumber":0,
            "pageSize":0
        };
    }
}