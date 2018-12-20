import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6a89814c3e961decacec823f228ae2b35e6e621729180546f1f528dc2c385e48'
    }
});