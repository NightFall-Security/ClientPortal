import type { EErrorType } from "@/enum/EErrorType"

export interface IServiceResponse<T>  {
    data:(T | null)
    message:string 
    errorType:EErrorType
}

export interface IPaginationResponse<T> extends IServiceResponse<T> {
    pageNumber:number 
    pageSize:number 
    totalCount:number
}