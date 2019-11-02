import axios from 'axios';
const instance = axios.create({
    baseURL:'https://burgerbuilder-543c1.firebaseio.com/'
});

export default instance;