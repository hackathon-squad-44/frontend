import axios from 'axios'

export const http = axios.create({
    baseURL: "https://squad-44-api.herokuapp.com/",
});