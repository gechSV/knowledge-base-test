import {makeAutoObservable} from 'mobx';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {React, useContext, useState} from 'react';
import { BlockType, InlineStyle, alignStyleMap } from './config';



// Модуль для управления draftJS.Editor
export default class TextEditorLogic{
    constructor(){
        
    }

    SetInLineStyle(editorState, setEditorState, style){
        setEditorState(RichUtils.toggleInlineStyle(editorState, style));
    }

    SetBlocStyle(editorState, setEditorState, style){
        setEditorState(RichUtils.toggleBlockType(editorState, style));
    }

    Fun(editorState, setEditorState){
        setEditorState
            (RichUtils.toggleInlineStyle(editorState, InlineStyle.CENTER));
    }

    // Tab(editorState, setEditorState){
    //     setEditorState(RichUtils.onTab())
    // }

}
