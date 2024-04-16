import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { User } from "../entities/User";

export interface AuthRepository {
    register(user: User): Promise<ResponseApiRice>

}