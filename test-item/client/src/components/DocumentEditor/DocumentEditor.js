import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import TextEditor from './TextEditor';


function DocumentEditor(){
    const {store} = useContext(Context);

    const [documentSections, setDocumentSections] = useState();

    useEffect(() => {
        localStorage.setItem("sections", "")
    }, [store, documentSections])

    return(
        <div className='document-editor-container'> 
            <div className='toolbar'>
                <button
                    className='toolbar-button'>
                         Добавить секцию 
                </button>
            </div>
            <TextEditor/>
        </div>
    )
}

export default observer(DocumentEditor);