import {makeAutoObservable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from '../http'

export default class Store{
    user = {};
    isAuth = false;
    isLoading = false; 

    constructor(){ 
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setUser(user){
        this.user = user; 
        // console.log('setUser' , JSON.stringify(user))
    }


    setLoading(bool){
        this.isLoading = bool;
    }


    async login(email, password){
        try {
            // console.log("Store.ts login: ", email, password)
            const response = await AuthService.login(email, password);
            // console.log('store registration' + JSON.stringify(response.data));
            localStorage.setItem('token', response.data.accesToken);
            this.setAuth(true);
            console.log("response.data.user " + response.data.user.email)
            this.setUser(response.data.user);
            console.log('login', response, 'user' ,this.user.email)
        } catch (err) {
            if(err instanceof Error){
                console.log(err.message);
            }
            else{
                console.log('Unexpected error', err);
            }
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