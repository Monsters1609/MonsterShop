import Axios from "axios";

const Request = Axios.create({
    baseURL: 'http://localhost:1609/api/',
})



export default Request;