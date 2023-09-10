import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Header from './Header';
import Menu from './Menu';

function NavigationBar(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <section className='navbar-section'>
            <Header/>
            <Menu/>
        </section>
    )
}

export default observer(NavigationBar);