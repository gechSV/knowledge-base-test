import {makeAutoObservable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from '../http'

export default class Store{
    user;
    isAuth = false;
    isLoading = false; 
    authStatusError = null;

    constructor(){ 
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setAuthStatusError(err){
        this.authStatusError = err;
    }

    setUser(user){
        this.user = {
            id: user.id,
            email: user.email, 
            firstname: user.firstname,
            lastname: user.lastname,
            patronymic: user.patronymic, 
        }
    }

    setLoading(bool){
        this.isLoading = bool;
    }

    async login(email, password){
        try {
            console.log("Store.js login: ", email, password)
            const response = await AuthService.login(email, password);
            console.log("response.data: ", response.data);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data);
            console.log(`Пользователь ${this.user.email} авторизован.`)
            this.setAuthStatusError(null);
        } catch (err) {
            this.setAuthStatusError(err.response.status);
            console.log("authErr: ", err.message);
        }
    }

    async registration(email, password){
        try {
            const response = await AuthService.registration(email, password);
            console.log('store registration' + response.data);
            localStorage.setItem('token', response.data.accesToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message);
            }
            else{
                console.log('Unexcepted error', error);
            }
        }
    }

    async logout(){
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (error) {
            if (error instanceof Error){
                console.log(error.message);
            }
            else{
                console.log('Unexcepted error', error);
            }
        }
    }

    async checkAuth(){ 
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accesToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (err) {
            if(err instanceof Error){
                console.log(err.message);
            }
            else{
                console.log('Unexcepted error', err);
            }
        }finally{
            this.setLoading(false);
        }
    }

}