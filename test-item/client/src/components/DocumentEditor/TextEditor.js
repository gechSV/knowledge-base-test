import React, { useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import './style-document-editor.css'
import { Editor } from "react-draft-wysiwyg";
import { observer } from 'mobx-react-lite';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


function TextEditor(props){
    const {documentEditorStore} = useContext(Context); 

    const [editorState, setEditorState] = useState(props.editorState);
    const [hideToolbar, setHideToolbar] = useState(true); 
    const editorIndex = props.editorIndex;

    function onEditorStateChange(newEditorState){
        setEditorState(newEditorState);
        documentEditorStore.setSectionByindex(editorIndex, newEditorState);
    }
 
    return(
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            toolbarClassName={hideToolbar ? "hideToolbar" : "toolbarClassName"}
            onFocus={() => {setHideToolbar(false)}}
            onBlur={() => {setHideToolbar(true)}}   
        />
    )

}


export default observer(TextEditor);