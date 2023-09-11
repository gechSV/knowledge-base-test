import {makeAutoObservable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from '../http'
import {IUser} from '../models/IUser'

export default class Store{
    
    constructor(){ 
        makeAutoObservable(this);
    }

    user = IUser;
    isAuth = false;
    isLoading = false; 
    authStatusError = '2';

    setAuth(bool){
        this.isAuth = bool;
    }

    setAuthStatusError(err){
        this.authStatusError = err;
    }

    setUser(user){
        this.user = new IUser(user)
    }

    getUser(){
        return this.user;
    }

    setLoading(bool){
        this.isLoading = bool;
    }

    async login(email, password){
        try {
            if(!email || !password || (email.length === 0) || (password.length === 0)){
                throw(new Error('Поля не могут быть пустыми'))
            }
            const response = await AuthService.login(email, password);
            console.log("response.data: ", response.data);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data);
            console.log(`Пользователь ${this.user.email} авторизован.`);
            // console.log(this.user)
            this.setAuthStatusError(null);
        } catch (err) {
            if(Object.hasOwn(err, '.response.status')){
                this.setAuthStatusError(err.response.status);
                console.log("authErr: ", err.response.status);
            }else{
                this.setAuthStatusError(401);
                console.log(err.message)
            }
            
        }
    }

    async registration(email, password){
        try {
            const response = await AuthService.registration(email, password);
            console.log('store registration' + response.data);
            localStorage.setItem('token', response.data.accesToken);
            this.setAuth(true);
            this.setUser(response.data.userDto);
        } catch (error) {
            console.log(error.message);
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
            console.log(error.message);
        }
    }

    async checkAuth(){ 
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data);
            console.log('user', this.user)
            this.setAuthStatusError(null);
        } catch (err) {
            this.setAuthStatusError(null);
            console.log(err.message);
        }finally{
            this.setLoading(false);
        }
    }

    roleComplianceCheck(acceptRoles){
        try {
            let hasRole = false;
             this.user.roles.forEach(role => {
                if(acceptRoles.includes(role)){
                    hasRole = true;
                }
            })
            console.log('hasRole: ', hasRole);
            return hasRole; 
        } catch (error) {
            console.log(error.message)
        }
    }


}