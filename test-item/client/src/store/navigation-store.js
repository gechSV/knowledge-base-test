import {makeAutoObservable} from 'mobx';
// import AuthService from "../services/AuthService";
// import axios from "axios";


// Модуль для управления разделами приложения
export default class NavigationStore{
    constructor(){
        makeAutoObservable(this);
    }

    getItemFromLocStore(locStorItemName){
        const item = localStorage.getItem(locStorItemName);

        if(!item){
            return null;
        }

        return item;
    }

    isOpenEditDocumentWindow = this.getItemFromLocStore('isOpenEditDocumentWindow'); 
    
    setIsOpenEditDocumentWindow(bool){
        this.isOpenEditDocumentWindow = bool;
        localStorage.setItem('isOpenEditDocumentWindow', bool)
    }

}
