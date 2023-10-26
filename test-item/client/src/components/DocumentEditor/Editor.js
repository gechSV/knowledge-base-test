import React, { Component } from 'react';
import {documentEditorStore} from '../../index';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import deleteLogo from "../../images/svg/delete.svg"


class Editor extends Component{
    constructor(props){
        super(props);
 
        this.state = {
            docState: documentEditorStore.getDoc()
        }
    }

    // Добавление новой текстовой секции
    addNewTextSection = () => {
        documentEditorStore.addNewTextSection();
        let newState = documentEditorStore.getDoc();
        this.setState({docState: newState});
    }
    
    deleteSection(index){
        console.log("deleteSection", index);
        documentEditorStore.deleteSectionsByIndex(index);
        let newState = documentEditorStore.getDoc();
        this.setState({docState: newState})
    }

    render( ){
        const doc = this.state.docState;
        console.log("doc:", doc)
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
                     onClick={() => {documentEditorStore.consoleLogAllText()}}>
                          Вывод в консоль
                 </button>
             </div>
                {doc.map((el) => {
                   return (
                        <div className='textEditorCon'>
                            <TextEditor stateIndex = {el.index} editorState={el.state}/>
                            <button 
                                className='deleteSections'
                                onClick={() => {this.deleteSection(el.index)}}
                                >
                                <img src={deleteLogo}>
                                </img>   
                            </button>
                        </div>
                   )
                })}
        </div>)
    }
}

export default (Editor);