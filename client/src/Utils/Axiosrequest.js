import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "https://movie-streaming-platform-t5bq.onrender.com/api/",
    // baseURL: "http://localhost:8800/api/",        
});

export default AxiosRequest;
