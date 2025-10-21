import axios from "axios";
import { CarResponse } from "../types";

export const getCars = async (): Promise<CarResponse[]> => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`);
    
    return response.data._embedded.cars;
}

export const deleteCar = async (link: string) : Promise<CarResponse> => {
    const response = await axios.delete(link);
    return response.data
}

export const addCar = async (car: Car) : Promise<CarResponse> => {    // 보낼때는 Car 자료형, 돌아올때는 CarResponse 자료형
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
        headers: {
            'Content-Type' : 'application/json',
        },
    });

    return response.data;
}