import React, {Component, useContext, useEffect, useState} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';


class TextEditor extends Component{
    // const [editorState, setEditorState] = useState();
    constructor(props){
        super(props)
        this.state = {editorState: EditorState.createEmpty(),};
        this.hideToolbar = true;
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render(){

        const { editorState } = this.state;
        return(
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
                // toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                toolbarClassName={this.hideToolbar ? "hideToolbar" : "toolbarClassName"}
                onFocus={() => {this.hideToolbar = false}}
                onBlur={() => {this.hideToolbar = true}}    
            />
        )
    }
    
    // const {store} = useContext(Context);

    // const [documentData, setDocumentData] = useState();

    // useEffect(() => {
    // }, [store])

    // return(
    //     <p className='editor'
    //         suppressContentEditableWarning
    //         contentEditable
    //         spellCheck={false}
    //     >
    //         Edit this text
    //     </p>
    // )
    
}

export default (TextEditor);