import React, { useContext, useEffect, useState, useRef} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import { Document } from '../../models/DocumentSections/Document';
import TextSection from './TextSection';
import 'draft-js/dist/Draft.css';
import {Editor, EditorState, RichUtils} from 'draft-js';



function DocumentEditor(){
    const {store} = useContext(Context);
    const {textEditorStore} = useContext(Context);

    const [documentSections, setDocumentSections] =
        useState(localStorage.getItem('sections') ? 
        JSON.parse(localStorage.getItem('sections')) : () => (new Document()));

    useEffect(() => {
        localStorage.setItem("sections", JSON.stringify(documentSections))
    }, [store, documentSections])

    // const documentSections = new DocumentSections();
    function addTextSection(){
        let newDoc = new Document(documentSections.sections);
        let ref = React.createRef();
        console.log(ref);
        newDoc.newSection({type: 'TextSection', data: '', key: documentSections.lenth + 1, ref: ref});
        setDocumentSections(newDoc);
    }

    return(
        <div className='document-editor-container'> 
            <div className='toolbar'>
                <button
                    className='toolbar-button'
                    onClick={() => addTextSection()}
                    >
                         Добавить секцию 
                </button>
            </div>
            <div className='workContainer'>
                {documentSections.sections.map((el, i) => (
                    <TextSection
                        ref = {el.ref} 
                        key={i}
                        />
                ))}
            </div>
        </div>
    )
}

export default observer(DocumentEditor);