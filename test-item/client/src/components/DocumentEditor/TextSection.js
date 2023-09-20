import React, { useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'

function TextSection(props){

    useEffect(() => {
    }, [])

    return(
        <section className='text-section'>
            <div className='text-section-textarea' contenteditable="true"></div>
        </section>
    )
}

export default observer(TextSection);