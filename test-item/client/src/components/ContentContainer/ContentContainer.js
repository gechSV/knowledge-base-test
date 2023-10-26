import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-content-container.css'
import Editor from '../DocumentEditor/Editor';

function ContentContainer(){
    const {store} = useContext(Context);
    const {navigationStore} = useContext(Context);

    useEffect(() => {
        
    }, [store, navigationStore])

    if (navigationStore.isOpenEditDocumentWindow){
        return(
            <div className='content-container'> 
                <Editor/>
            </div>
        )
    }

    return(
        <div className='content-container'> 
            ContentContainer - 
        </div>
    )

}

export default observer(ContentContainer);