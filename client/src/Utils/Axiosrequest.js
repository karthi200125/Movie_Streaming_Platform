import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
});

export default AxiosRequest;
