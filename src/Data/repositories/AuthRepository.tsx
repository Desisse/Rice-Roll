import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiRiceRoll, ApiRiceRollForImage } from "../sources/remote/api/ApiRiceRoll";
import { ResponseApiRice } from "../sources/remote/models/ResponseApiRice";
import { ImagePickerAsset } from "expo-image-picker";
import mime from 'mime';

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

    async registerWithImage(user: User, file: ImagePickerAsset): Promise<ResponseApiRice> {
        try {
            let data = new FormData();

            data.append('image', {
                //@ts-ignore
                uri: file.uri,
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            }, undefined);

            data.append('user', JSON.stringify(user));
            const response = await ApiRiceRollForImage.post<ResponseApiRice>('/users/createWithImage', data);
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