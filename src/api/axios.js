import axios from "axios";


export default axios.create({
    baseURL: 'https://pks-backend.onrender.com/api'
});