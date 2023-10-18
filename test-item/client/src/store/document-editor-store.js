import {makeAutoObservable, observable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import { Document } from '../models/DocumentSections/Document';
import { EditorState, convertToRaw } from 'draft-js';


// Модуль для управления редактором документов приложения
export default class DocumentEditorStore{
    constructor(){
        makeAutoObservable(this);
        this.document.newSection(
            {type: "text", data: "", key: '', state: EditorState.createEmpty()})
    }

    document = new Document();

    addNewSection(ref){
        const newSections = new Document(this.document.getSections());
        newSections.newSection({type: "text", data: "", key: '', state: EditorState.createEmpty()});
        this.document = new Document(newSections.getSections());
    }

    getDoc(){
        return this.document.getSections()
    }

    getText(){
        this.document.getSections().map((el, i) => {
            console.log(i, '+ ', convertToRaw(el.state.getCurrentContent()))
        })
        
        // return this.document[1].state;
    }
}
