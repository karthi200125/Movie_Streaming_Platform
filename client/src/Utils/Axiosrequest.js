import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "https://movie-streaming-platform-t5bq.onrender.com/api/",    
});

export default AxiosRequest;
