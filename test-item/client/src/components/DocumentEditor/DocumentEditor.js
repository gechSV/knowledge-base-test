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

    const [documentSections, setDocumentSections] = useState(() => (new Document()));

    useEffect(() => {

    }, [store, documentSections])

    // const documentSections = new DocumentSections();
    function addTextSection(){
        let newDoc = new Document(documentSections.sections);
        newDoc.newSection({type: 'TextSection', data: '', key: documentSections.lenth + 1});
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
                        key={i}/>
                ))}
            </div>
        </div>
    )
}

export default observer(DocumentEditor);