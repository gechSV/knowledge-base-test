import React, { useContext, useEffect} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

function AdminSubMenu(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <div className='submenu'>
            <button>A Button 1</button>
            <button>A Button 2</button>
            <button>A Button 3</button>
            <button>A Button 4</button>
        </div>

    )
}

export default observer(AdminSubMenu);