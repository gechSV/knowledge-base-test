// import React, {Component} from 'react';
// import { documentEditorStore} from '../../index';
// import './style-document-editor.css'
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


// class TextEditor extends Component{
//     // const [editorState, setEditorState] = useState();
//     constructor(props){
//         super(props)
//         this.state = {editorState : props.editorState,};
//         this.stateIndex = this.props.stateIndex;
//         console.log("this.stateIndex: ", this.stateIndex)
//         this.hideToolbar = true;
//     }

//     onEditorStateChange = (editorState) => {
//         this.setState({
//           editorState,
//         });
//         documentEditorStore.setSectionByindex(this.stateIndex, this.state.editorState);
//     };

//     onChangeState(index, sections){
//         documentEditorStore.setSectionByindex(index, sections)
//     }

//     render(){
//         let editorState = this.state.editorState
//         return(
//             <Editor
//                 editorState={editorState}
//                 onEditorStateChange={this.onEditorStateChange}
//                 wrapperClassName="wrapperClassName"
//                 editorClassName="editorClassName"
//                 toolbarClassName={this.hideToolbar ? "hideToolbar" : "toolbarClassName"}
//                 onFocus={() => {this.hideToolbar = false}}
//                 onBlur={() => {this.hideToolbar = true}}   
//                 // onChange={() => {this.onChangeState(this.stateIndex, editorState)}} 
//             />
//         )
//     }
// }

// export default (TextEditor);


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

    const eonEditorStateChange = (newEditorState) => {
            setEditorState(newEditorState)
            documentEditorStore.setSectionByindex(this.stateIndex, newEditorState);
        };

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