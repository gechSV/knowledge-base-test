import React, { Component, useContext, useEffect, useState, useRef} from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { makeObservable, observable } from 'mobx';
import './style-document-editor.css'
import TextEditor from './TextEditor';
import { Document } from '../../models/DocumentSections/Document';


// function DocumentEditor(){
//     const {store} = useContext(Context);

//     const [documentSections, setDocumentSections] = useState();

//     useEffect(() => {
//         localStorage.setItem("sections", "")
//     }, [store, documentSections])

//     return(
//         <div className='document-editor-container'> 
//             <div className='toolbar'>
//                 <button
//                     className='toolbar-button'>
//                          Добавить секцию 
//                 </button>
//             </div>
//             <TextEditor/>
//         </div>
//     )
// }


class DocumentEditor extends Component{
    // sections = new Document();

    constructor(props){
        super(props);
        // const sections = new Document()
 
        this.state = {
            sections: new Document(),
        }
        console.log(this.state.sections)
    }

    addNewSection = () => {
        const newSections = new Document(this.state.sections.getSections());
        newSections.newSection({type: "text", data: "", key: '', ref: ''});
        this.setState({sections: newSections}, () => { this.render()})
        // this.setState((prevState) => {
        //     return newSections
        // })

        console.log(this.state.sections)
        // newState.new
        // this.setState(sections: {type: "text", data: "", key: '', ref: ''})
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.sections != this.state.sections){
            console.log('sadasdasda')
        }
    }

    render( ){
        const {sections} = this.state;
        return (
        <div className='document-editor-container'> 
             <div className='toolbar'>
                 <button
                     className='toolbar-button'
                     onClick={() => {this.addNewSection()}}>
                          Добавить секцию 
                 </button>
             </div>
                {sections.getSections().map((el) => {
                   return (<TextEditor />)
                })}
                {/* <div> {sections} </div> */}
        </div>)
    }
}

export default DocumentEditor;