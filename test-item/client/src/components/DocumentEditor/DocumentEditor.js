import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function DocumentEditor(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <div> DocumentEditor </div>
    )
}

export default observer(DocumentEditor);