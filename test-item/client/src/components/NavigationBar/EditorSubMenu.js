import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function EditorSubMenu(props){
    const {store} = useContext(Context);
    const {navigationStore} = useContext(Context);

    useEffect(() => {
    }, [store])
    
    function openDocumentEditor(){
        // Установка флага состояния открытия редактора документа 
        navigationStore.setIsOpenEditDocumentWindow(true)
        // Закрытие подменю
        props.cloceSubMenu(false)
    }

    return(
        <div className='submenu'>
            <button 
                onClick={() => openDocumentEditor()}>
                Create new document
            </button>
            <button>E Button 2</button>
            <button>E Button 3</button>
            <button>E Button 4</button>
        </div>

    )
}

export default observer(EditorSubMenu);