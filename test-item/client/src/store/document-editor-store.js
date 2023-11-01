import {makeAutoObservable} from 'mobx';
import { Document } from '../models/DocumentSections/Document';
import { EditorState, convertToRaw } from 'draft-js';


/**
 * Модуль для управления редактором документов приложения
 */ 
export default class DocumentEditorStore{
    constructor(){
        makeAutoObservable(this);
        this.document.newSection({
                index: 0,
                type: "text", 
                state: EditorState.createEmpty()
            });
    }

    document = new Document();

    addNewTextSection(){
        const newSections = new Document(this.document.getSections());
        // let len = this.document.getSections().length;
        // console.log("len: ", len)
        newSections.newSection({
            index: 0,
            type: "text", 
            state: EditorState.createEmpty()
        });
        this.document = new Document(newSections.getSections());
    }

    setSectionByindex(index, state){
        this.document.setStateDataByindex(index, state);
    }

    getDoc(){
        return this.document.getSections()
    }

    getText(){
        this.document.getSections().map((el, i) => {
            console.log(i, '+ ', convertToRaw(el.state.getCurrentContent()))
        })

    }

    consoleLogAllText(){
        this.document.getSections().map(el => {
            console.log(convertToRaw(el.state.getCurrentContent()))
        })
    }

    deleteSectionsByIndex(index){
        this.document.deleteSectionByIndex(index);
    }
}
