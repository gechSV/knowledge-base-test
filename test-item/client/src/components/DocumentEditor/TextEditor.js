import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'


function TextEditor(){
    const {store} = useContext(Context);

    const [documentData, setDocumentData] = useState();

    useEffect(() => {
    }, [store])

    return(
        <p className='editor'
            suppressContentEditableWarning
            contentEditable
            spellCheck={false}
        >
            Edit this text
        </p>
    )
}

export default observer(TextEditor);