import { AxiosError } from "axios";
import { Address } from "../../Domain/entities/Address";
import { AddressRepository } from "../../Domain/repositories/AddressRepository";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { ApiRiceRoll } from "../sources/remote/api/ApiRiceRoll";

export class AddressRepositoryImpl implements AddressRepository {
    async create(address: Address): Promise<ResponseApiRice> {
        try {
            const response = await ApiRiceRoll.post<ResponseApiRice>('/address/create', address);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = error as AxiosError;
            console.log("ERROR:" + JSON.stringify(e.response?.data));
            const apiError: ResponseApiRice = JSON.parse(
              JSON.stringify(e.response?.data)
            );
            return Promise.resolve(apiError);
        }
        
    }
}