import axios from "axios";

const ApiRiceRoll = axios.create({
    baseURL: 'http://192.168.1.8:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

const ApiRiceRollForImage = axios.create({
    baseURL: 'http://192.168.1.8:3000/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'accept': 'application/json'
    }
})

export {ApiRiceRoll, ApiRiceRollForImage}