import axios from 'axios';

// services/instance.js
export const instance = axios.create({
    baseURL: 'https://sa6jonck2l.execute-api.eu-central-1.amazonaws.com/prod/members/'
});

