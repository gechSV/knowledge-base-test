import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import './style.css'
import { observer } from 'mobx-react-lite';

function Header(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    return(
        <section className='header-section'>
            <div className='user-info'>
                <div>Вошли как</div>
                <a href="#">{`${store.user.email}`}</a>
            </div>
            <button className='exit-button' onClick={() => store.logout()}>Выход</button>
        </section>
    )
}

export default observer(Header);