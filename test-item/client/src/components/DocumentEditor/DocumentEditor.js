import React, { Component, useContext, useEffect, useState, useRef} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import { Document } from '../../models/DocumentSections/Document';


// function DocumentEditor(){
//     const {store} = useContext(Context);

//     const [documentSections, setDocumentSections] = useState();

//     useEffect(() => {
//         localStorage.setItem("sections", "")
//     }, [store, documentSections])

//     return(
//         <div className='document-editor-container'> 
//             <div className='toolbar'>
//                 <button
//                     className='toolbar-button'>
//                          Добавить секцию 
//                 </button>
//             </div>
//             <TextEditor/>
//         </div>
//     )
// }


class DocumentEditor extends Component{
    constructor(props){
        super(props)
        this.sections = useState(new Document());
    }

    // renderSections(){
    //     sec = this.sections.getSections()
    //     return()

    // }

    render( ){
        return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => (this.sections.newSection(
                        {type: "text", data: "", key: '', ref: ''}))}>
                          Добавить секцию 
                 </button>
             </div>
             {this.sections.getSections().map((el) => {
                <TextEditor />
             })}
        </div>)
    }
}

export default (DocumentEditor);