import React, { useContext, useEffect, useState, useRef} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import { DocumentSections } from '../../models/DocumentSections/DocumentSections';
import TextSection from './TextSection';
import 'draft-js/dist/Draft.css';
import {Editor, EditorState, RichUtils} from 'draft-js';



function DocumentEditor(){
    const {store} = useContext(Context);
    const {textEditorStore} = useContext(Context);

    const [documentSections, setDocumentSections] = useState(new DocumentSections())  
    let editorStates;

    useEffect(() => {
    }, [store, documentSections])

    const edState = [];
    // const documentSections = new DocumentSections();
    function addTextSection(){
        let newDoc = new DocumentSections(documentSections.sections);
        newDoc.newSection({type: 'TextSection', data: ''});
        setDocumentSections(newDoc);
        console.log();
    }


    function handleKeyCommand(command, editorState) {
        console.log(command)
        const newState = RichUtils.handleKeyCommand(editorState, command);
     
     
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
     
        return 'not-handled';
    }

    return(
        <div className='document-editor-container'> 
            <div className='toolbar'>
                <button
                    className='toolbar-button'
                    onClick={addTextSection}
                    >
                         Добавить секцию 
                </button>

                <button>
                    bold
                </button>
            
            </div>
            <div className='workContainer'>
                {documentSections.sections.map(el => (
                    <TextSection 
                        handleKeyCommand = {handleKeyCommand}/>
                ))}
            </div>
        </div>
    )
}

export default observer(DocumentEditor);