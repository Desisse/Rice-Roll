import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { User } from "../entities/User";

export interface AuthRepository {
    login(email: string, password: string): Promise<ResponseApiRice>
    register(user: User): Promise<ResponseApiRice>
}