import React, { Component, useContext, useEffect, useState, useRef} from 'react';
import { Context, store , documentEditorStore} from '../../index';
import { observer } from 'mobx-react-lite';
import { makeObservable, observable } from 'mobx';
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

    // static context = documentEditorStore;
    // Добавление новой текстовой секции
    addNewTextSection = () => {
        // const newSections = new Document(this.state.sections.getSections());
        // newSections.newSection({type: "text", data: "", key: '', ref: ''});
        // this.setState({sections: newSections})

        // console.log("Добавлена текстовая секция.")

        documentEditorStore.addNewSection();
        let newState = documentEditorStore.getDoc();
        this.setState({docState: newState});
        // this.state.docState.addNewSection();
        // console.log(this.state.docState.getDoc())
        this.render()
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.sections != this.state.sections){

    //     }
    // }

    // componentDidUpdate() {
    //     console.log("Update", this.context);
    //   }

    render( ){
        const doc = this.state.docState; 
        return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => {this.addNewTextSection()}}>
                          Добавить секцию 
                 </button>
             </div>
                {doc.map((el) => {
                   return (<TextEditor />)
                })}
        </div>)
    }
}

export default (DocumentEditor);