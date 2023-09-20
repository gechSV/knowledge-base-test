import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import { DocumentSections } from '../../models/DocumentSections/DocumentSections';
import TextSection from './TextSection';




function DocumentEditor(){
    const {store} = useContext(Context);
    const [documentSections, setDocumentSections] = useState(new DocumentSections())
    
    useEffect(() => {
    }, [store, documentSections])

    // const documentSections = new DocumentSections();


    function addTextSection(){
        let newDoc = new DocumentSections(documentSections.sections);
        newDoc.newSection({type: 'TextSection', data: ''});
        setDocumentSections(newDoc)
        console.log(documentSections);
    }

    function bold(){
        document.execCommand("bold", true, "");
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
                <button onClick={bold}>
                    bold
                </button>
            </div>
            <div className='workContainer'>
                {documentSections.sections.map(el => (
                    <TextSection data = {el.data}/>
                ))}
            </div>
        </div>
    )
}

export default observer(DocumentEditor);