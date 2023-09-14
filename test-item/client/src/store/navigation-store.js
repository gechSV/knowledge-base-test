import {makeAutoObservable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";

// Модуль для управления разделами приложения
export default class NavigationStore{
    constructor(){
        makeAutoObservable(this);
    }

    isOpenEditDocumentWindow = false;
    
    setIsOpenEditDocumentWindow(bool){
        this.isOpenEditDocumentWindow = bool;
    }

}
