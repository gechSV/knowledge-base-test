import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import AdminSubMenu from './AdminSubMenu'
import EditorSubMenu from './EditorSubMenu';

function Menu(){
    const {store} = useContext(Context);

    useEffect(() => {
    }, [store])

    const [isOpenAdmineSubMenu, setIsOpenAdmineSubMenu] = useState();
    const [isOpenEditorSubMenu, setIsOpenEditorSubMenu] = useState();

    function menuItemsForAdmin(){
        if(store.roleComplianceCheck(['ADMIN'])){
            return(
                <div>
                    <button className='menu-button'
                        onClick={() => switchAdminSubmenuButtons()}>Admin</button>
                </div>  
            )
        }
        return null;
    }

    function switchAdminSubmenuButtons(flag){
        turnOffAllSwitch();
        setIsOpenAdmineSubMenu(!isOpenAdmineSubMenu);
    }

    function menuItemForEditor(){
        if(store.roleComplianceCheck(['EDITOR', 'ADMIN'])){
            return(
                <div>
                    <button className='menu-button'
                        onClick={() => switchEditorSubmenuButtons()}>Editor</button>
                </div>  
            )
        }
        return null;
    }

    function switchEditorSubmenuButtons(flag){
        turnOffAllSwitch();
        setIsOpenEditorSubMenu(!isOpenEditorSubMenu);
    }

    function turnOffAllSwitch(){
        setIsOpenAdmineSubMenu(false);
        setIsOpenEditorSubMenu(false);
    }

    return(
        <section className='menu-section'>
            <div className='menu-button-section'>
                <button className='menu-button'>Home</button>
                {menuItemForEditor()}
                {menuItemsForAdmin()}
            </div>

            {isOpenAdmineSubMenu ? <AdminSubMenu/> : null}
            {isOpenEditorSubMenu ? <EditorSubMenu/> : null}
        </section>

    )
}

export default observer(Menu);