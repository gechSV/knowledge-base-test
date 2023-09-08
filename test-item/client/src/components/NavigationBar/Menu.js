import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import './style.css'
import { observer } from 'mobx-react-lite';

function Menu(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    
    function menuItemsForAdmin(){
        if(store.isAuth){
            return(
                <div>
                    <button className='menu-button'>Админ</button>
                </div>  
            )
        }
        return null;
    }

    function submenuButtons(){
        return(
            <div>
                <button>Нажми</button>
                <button>Нажми</button>
                <button>Нажми</button>
                <button>Нажми</button>
            </div>
        )
    }

    return(
        <section className='menu-section'>
            <div className='menu-button-section'>
                <button className='menu-button'>Home</button>
                <button className='menu-button'>Test</button>
                {menuItemsForAdmin()}
            </div>
            <div className='submenu'>
                {submenuButtons()}
            </div>
        </section>

    )
}

export default observer(Menu);