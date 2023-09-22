import React, { useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Context } from '../../index';

function TextSection(props){
    useEffect(() => {
    }, [])

    const {textEditorStore} = useContext(Context);
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    // function handleKeyCommand(command, editorState) {
    //     const newState = RichUtils.handleKeyCommand(editorState, command);
     
     
    //     if (newState) {
    //       this.onChange(newState);
    //       return 'handled';
    //     }
     
    //     return 'not-handled';
    // }

    // function _onBoldClick(){
    //     setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    // }

    function updCur(){
        // textEditorStore.setCurrentEditorState(editorState);
        // textEditorStore.setCurrentEditorState(setEditorState);
        textEditorStore.setContextContainer(onBoldClick);
        console.log()
    }

    let onBoldClick = function(){
        setEditorState
            (RichUtils.toggleInlineStyle(editorState, 'BOLD'));
        console.log(editorState)
    }

    return(
        <section className='text-section'>
            <Editor 
                editorState={editorState} 
                onChange={setEditorState} 
                handleKeyCommand={props.handleKeyCommand}
                />
        </section>
    )
}

export default observer(TextSection);