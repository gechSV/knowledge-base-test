import React, {Component, useContext, useEffect, useState} from 'react';
import { Context, documentEditorStore} from '../../index';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import {Animated} from "react-animated-css";


class TextEditor extends Component{
    // const [editorState, setEditorState] = useState();
    constructor(props){
        super(props)
        this.state = {editorState: props.editorState,};
        this.hideToolbar = true;
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render(){

        const { editorState } = this.state;
        console.log("state.editorState", editorState)
        console.log('+ ', convertToRaw(editorState.getCurrentContent()))
        return(
            <Editor
                editorState={this.state.editorState}
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
}

export default (TextEditor);