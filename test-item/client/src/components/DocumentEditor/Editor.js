// import React, { Component } from 'react';
// import {documentEditorStore} from '../../index';
// import './style-document-editor.css'
// import TextEditor from './TextEditor';
// import deleteLogo from "../../images/svg/delete.svg"
// import { EditorState, convertToRaw } from 'draft-js';



// class Editor extends Component{
//     constructor(props){
//         super(props);
 
//         this.state = {
//             docState: documentEditorStore.getDoc()
//         }
//     }

//     // Добавление новой текстовой секции
//     addNewTextSection = () => {
//         documentEditorStore.addNewTextSection();
//         let newState = documentEditorStore.getDoc();
//         this.setState({docState: newState});
//     }
    
//     deleteSection(index){
//         console.log("deleteSection index", index);
//         documentEditorStore.deleteSectionsByIndex(index);
//         // let newState = ;
//         this.setState({docState: documentEditorStore.getDoc()});
//     }

//     render( ){
//         let doc = this.state.docState;
//         // // console.log("render doc: ", )
//         // for(let i = 0; i< doc.length; i++){
//         //     console.log(i, '+ ', convertToRaw(doc[i].state.getCurrentContent()))
//         // }
//         return (
//         <div className='document-editor-container'> 
//              <div className='toolbar'>
//                  <button
//                      className='toolbar-button'
//                      onClick={() => {this.addNewTextSection()}}>
//                           Добавить секцию 
//                  </button>
//                  <button
//                      className='toolbar-button'
//                      onClick={() => {documentEditorStore.consoleLogAllText()}}>
//                           Вывод в консоль
//                  </button>

//                  <button
//                      className='toolbar-button'
//                      onClick={() => {this.setState({docState: documentEditorStore.getDoc()});}}>
//                           кукутвук
//                  </button>

//              </div>
//                 {doc.map((el, i) => {
//                     console.log(i, '+= ', convertToRaw(el.state.getCurrentContent()).blocks)
//                    return (
//                         <div className='textEditorCon'>
//                             <TextEditor 
//                                 editorIndex = {el.index} 
//                                 editorState={el.state}/>
//                             <button 
//                                 className='deleteSections'
//                                 id={'delButtonId_' + i}
//                                 onClick={() => {this.deleteSection(i)}}
//                                 >
//                                 <img src={deleteLogo}>
//                                 </img>   
//                             </button>
//                         </div>
//                    )
//                 })}
//         </div>)
//     }
// }

// export default (Editor);


import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../../index';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import deleteLogo from "../../images/svg/delete.svg"
import { observer } from 'mobx-react-lite';
import { EditorState, convertToRaw } from 'draft-js';

function Editor(){
    const {documentEditorStore} = useContext(Context);
    const [docState, setDocState] = useState(documentEditorStore.getDoc());

    useEffect(() => {
    }, [documentEditorStore])

    // Добавление новой текстовой секции
    function  addNewTextSection(){
        documentEditorStore.reloadDocument(docState);
        documentEditorStore.addNewTextSection();
        setDocState(documentEditorStore.getDoc())
    }
    

    function deleteSection(index){
        const bufArr = docState.slice();
        bufArr.splice(index, 1);
        setDocState(bufArr);
        documentEditorStore.reloadDocument(docState);
    }

    
    return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => {addNewTextSection()}}>
                          Добавить секцию 
                 </button>
                 <button
                     className='toolbar-button'
                     onClick={() => {documentEditorStore.consoleLogAllText()}}>
                          Вывод в консоль
                 </button>

                 <button
                     className='toolbar-button'
                     onClick={() => {console.log(documentEditorStore.getDoc())}}>
                          кукутвук
                 </button>

             </div>
                {docState.map((el, i) => {
                    console.log(i, '+= ', convertToRaw(el.state.getCurrentContent()).blocks)
                   return (
                        <div className='textEditorCon'  key={el.index}>
                            <TextEditor 
                                editorIndex = {i} 
                                editorState={el.state}/>
                            <button 
                                className='deleteSections'
                                onClick={() => {deleteSection(i)}}>
                                <img src={deleteLogo}>
                                </img>   
                            </button>
                        </div>
                   )
                })}
        </div>
    )
}

export default observer(Editor);