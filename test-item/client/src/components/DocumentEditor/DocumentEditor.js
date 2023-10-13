import React, { Component, useContext, useEffect, useState, useRef} from 'react';
import { Context, store , DocumentEditorStore} from '../../index';
import { observer } from 'mobx-react-lite';
import { makeObservable, observable } from 'mobx';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import { Document } from '../../models/DocumentSections/Document';

class DocumentEditor extends Component{
    // sections = new Document();
    // Context = useContext(Context);
    constructor(props){
        super(props);
        // const sections = new Document()
 
        this.state = {
            sections: new Document(),
        }

        console.log(this.state.sections)
    }

    // Добавление новой текстовой секции
    addNewTextSection = () => {
        // const newSections = new Document(this.state.sections.getSections());
        // newSections.newSection({type: "text", data: "", key: '', ref: ''});
        // this.setState({sections: newSections})

        // console.log("Добавлена текстовая секция.")

        this.docEditStore.addNewSection();
        console.log(this.docEditStore.getDoc())
        this.render()
    }

    // componentDidUpdate(prevProps, prevState){
    //     if(prevState.sections != this.state.sections){

    //     }
    // }

    render( ){
        return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => {this.addNewTextSection()}}>
                          Добавить секцию 
                 </button>
             </div>
                {DocumentEditorStore.getDoc().map((el) => {
                   return (<TextEditor />)
                })}
                {/* <div> {sections} </div> */}
        </div>)
    }
}

export default (DocumentEditor);