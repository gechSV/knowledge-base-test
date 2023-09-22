import {makeAutoObservable} from 'mobx';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { useContext } from 'react';


// Модуль для управления разделами приложения
export default class TextEditorStore{
    constructor(){
        makeAutoObservable(this);
    }

}
