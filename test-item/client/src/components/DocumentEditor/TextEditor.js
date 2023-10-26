import React, {Component} from 'react';
import { documentEditorStore} from '../../index';
import './style-document-editor.css'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


class TextEditor extends Component{
    // const [editorState, setEditorState] = useState();
    constructor(props){
        super(props)
        this.state = {editorState : props.editorState,};
        this.stateIndex = this.props.stateIndex;
        console.log("this.stateIndex: ", this.stateIndex)
        this.hideToolbar = true;
    }

    onEditorStateChange = (editorState) => {
        this.setState({
          editorState,
        });
        documentEditorStore.setSectionByindex(this.stateIndex, this.state.editorState);
      };

    render(){
        return(
            <Editor
                editorState={this.state.editorState}
                onEditorStateChange={this.onEditorStateChange}
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