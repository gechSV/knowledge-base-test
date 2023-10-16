import {makeAutoObservable, observable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import { Document } from '../models/DocumentSections/Document';


// Модуль для управления редактором документов приложения
export default class DocumentEditorStore{
    constructor(){
        makeAutoObservable(this);
    }

    document = new Document([{type: "text", data: "", key: '', ref: ''}]);

    addNewSection(section){
        const newSections = new Document(this.document.getSections());
        newSections.newSection({type: "text", data: "", key: '', ref: ''})
        this.document = new Document(newSections.getSections());
    }

    getDoc(){
        return this.document.getSections()
    }
}
