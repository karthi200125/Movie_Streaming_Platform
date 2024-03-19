import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    // baseURL: "https://movie-streaming-platform-v44x.onrender.com/api/",
});

export default AxiosRequest;
