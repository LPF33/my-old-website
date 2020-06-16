import axios from 'axios';

var instance = axios.create({
    xsrfCookieName: 'mytoken',
    xsrfHeaderName: 'csrf-token',
    withCredentials: true
});

export default instance;