import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import './style.css'
import { observer } from 'mobx-react-lite';

function MainPage(){
    const store = useContext(Context);

    useEffect(() => {
        
    }, [store])


}

export default observer(MainPage);