import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseApiRice> {
        try {
            const response = await ApiRiceRoll.post<ResponseApiRice>('/users/create', user);
            return Promise.resolve( response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR:' + JSON.stringify(e.response?.data));
            const apiError: ResponseApiRice = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
            
            
        }
    }

    async login(email: string, password: string): Promise<ResponseApiRice> {
        try {
            const response = await ApiRiceRoll.post<ResponseApiRice>('/users/login', {
                email: email,
                password: password
            });
            return Promise.resolve( response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR:' + JSON.stringify(e.response?.data));
            const apiError: ResponseApiRice = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
            
            
        }
    }
}