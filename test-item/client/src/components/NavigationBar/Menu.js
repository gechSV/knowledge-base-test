import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import AdminSubMenu from './AdminSubMenu'

function Menu(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    const [isOpenAdmineSubMenu, setIsOpenAdmineSubMenu] = useState();

    function menuItemsForAdmin(){
        if(store.roleComplianceCheck(['ADMIN'])){
            return(
                <div>
                    <button className='menu-button'
                        onClick={() => adminSubmenuButtons()}>Admin</button>
                </div>  
            )
        }
        return null;
    }

    function adminSubmenuButtons(flag){
        setIsOpenAdmineSubMenu(!isOpenAdmineSubMenu)
    }

    return(
        <section className='menu-section'>
            <div className='menu-button-section'>
                <button className='menu-button'>Home</button>
                <button className='menu-button'>Test</button>
                {menuItemsForAdmin()}
            </div>
            {isOpenAdmineSubMenu ? <AdminSubMenu/> : null}
        </section>

    )
}

export default observer(Menu);