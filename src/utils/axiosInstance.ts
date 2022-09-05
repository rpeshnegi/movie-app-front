import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || '',
});

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const user: IAuthData = JSON.parse(localStorage.getItem('user') || '{}');
        if (user) {
            config.headers!.Authorization = 'Bearer ' + user;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    });


axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        console.log(error)
        return Promise.reject((error.response && error.response.data) || 'Something went wrong')
    }
);

export default axiosInstance;

