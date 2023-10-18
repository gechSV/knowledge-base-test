import React, { Component, useContext, useEffect, useState, useRef} from 'react';
import { Context, store , documentEditorStore} from '../../index';
import { observer } from 'mobx-react-lite';
import { makeObservable, observable, reaction } from 'mobx';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import { Document } from '../../models/DocumentSections/Document';
import DocumentEditorStore from '../../store/document-editor-store';

class DocumentEditor extends Component{
    constructor(props){
        super(props);
 
        this.state = {
            docState: documentEditorStore.getDoc()
        }

        console.log(this.state.sections)
        // console.log(this.docEditStore)

    }

    // Добавление новой текстовой секции
    addNewTextSection = () => {
        documentEditorStore.addNewSection();
        let newState = documentEditorStore.getDoc();
        this.setState({docState: newState});
    }


    render( ){
        const doc = this.state.docState;
        console.log("doc[0].ref", doc[0].ref)
        return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => {this.addNewTextSection()}}>
                          Добавить секцию 
                 </button>
                 <button
                     className='toolbar-button'
                     onClick={() => {}}>
                          Добавить секцию 
                 </button>
             </div>
                {doc.map((el) => {
                   return (<TextEditor editorState={el.state}/>)
                })}
        </div>)
    }
}

export default (DocumentEditor);