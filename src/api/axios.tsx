import axios, { AxiosResponse, AxiosInstance } from 'axios';

const connect: AxiosInstance = axios.create({
    baseURL: `http://localhost:3004`,
});

export const get = <T extends any>(url: string): Promise<AxiosResponse<T>> => {
    return connect.get(url);
};
