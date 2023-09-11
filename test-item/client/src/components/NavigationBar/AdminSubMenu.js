import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function Header(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <div className='submenu'>
            
        </div>

    )
}

export default observer(Header);