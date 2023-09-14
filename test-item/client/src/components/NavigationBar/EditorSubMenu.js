import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function EditorSubMenu(){
    const {store} = useContext(Context);
    const {navigationStore} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <div className='submenu'>
            <button onClick={
                () => navigationStore.setIsOpenEditDocumentWindow(true)}>
                    Create new document</button>
            <button>E Button 2</button>
            <button>E Button 3</button>
            <button>E Button 4</button>
        </div>

    )
}

export default observer(EditorSubMenu);