import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";

export class AuthRepositoryImpl implements AuthRepository {
    async register(user: User) {
        try {
            const response = await ApiRiceRoll.post<ResponseApiRice>('/users/create', user);
            return Promise.resolve({ error: undefined, result: response.data});
            
        } catch (error) {
            let e = (error as Error).message;
            console.log('ERROR:' + e);
            return Promise.resolve({ error: e, result: undefined});
            
            
        }
    }
}