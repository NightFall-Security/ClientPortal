import { Http } from "@/classes/http";
import { API_URL } from "@/services/config";
import type { IServiceResponse } from "@/interfaces/IHttp";
import type { IAuth, ISession } from "@/interfaces/IPayloads";

/**
 * Base url.
 */
const BASE_URL:string = `${API_URL}/auth`;

/**
 * Register a new user.
 * @param payload 
 * @returns 
 */
export const registerUser = async(payload:IAuth):Promise<IServiceResponse<ISession>> => await Http.postAsync(`${BASE_URL}/register`, payload);

/**
 * Login user.
 * @param payload 
 * @returns 
 */
export const loginUser = async(payload:IAuth):Promise<IServiceResponse<ISession>> => await Http.postAsync(`${BASE_URL}/login`, payload);

/**
 * Logout user
 * @returns 
 */
export const logoutUser = async():Promise<IServiceResponse<ISession>> => await Http.postAsync(`${BASE_URL}/logout`,{});

/**
 * Checking user session.
 * @returns 
 */
export const checkSession = async():Promise<IServiceResponse<ISession>> => await Http.getAsync(`${BASE_URL}/me`);