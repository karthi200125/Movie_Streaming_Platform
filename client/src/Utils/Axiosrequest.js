import axios from 'axios';

export const AxiosRequest = () => {
    return axios.create({
        baseURL: 'http://localhost:8800/api/'
    });
};
