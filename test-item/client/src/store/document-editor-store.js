import {makeAutoObservable, observable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import { Document } from '../models/DocumentSections/Document';


// Модуль для управления редактором документов приложения
export default class DocumentEditorStore{
    constructor(){
        makeAutoObservable(this);
        this.document.newSection({type: "text", data: "", key: '', ref: ''})
    }

    document = new Document();

    addNewSection(section){
        const newSections = new Document(this.document.getSections());
        newSections.newSection({type: "text", data: "", key: '', ref: ''})
        this.document = new Document(newSections.getSections());
    }

    getDoc(){
        return this.document.getSections()
    }
}
