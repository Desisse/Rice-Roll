import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { Address } from "../entities/Address";

export interface AddressRepository {

    create(address: Address): Promise<ResponseApiRice>;
    getByUser(id_user: string): Promise<Address[]>;
}