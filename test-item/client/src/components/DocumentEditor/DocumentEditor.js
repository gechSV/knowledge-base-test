import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'

function DocumentEditor(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <div className='document-editor-container'> 
            <div className='toolbar'>
                toolbar
            </div>
            <div className='workContainer'>
                work container
            </div>
        </div>
    )
}

export default observer(DocumentEditor);