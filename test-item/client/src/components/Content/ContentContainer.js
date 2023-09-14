import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style.css'

function ContentContainer(){
    const {store} = useContext(Context);
    const {navigationStore} = useContext(Context);

    useEffect(() => {
        
    }, [store, navigationStore])

    if (navigationStore.isOpenEditDocumentWindow){
        return(
            <div className='content-container'> 
                ContentContainer + 
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