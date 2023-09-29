import React, { useContext, useEffect, useState, useCallback} from 'react';
import { observer } from 'mobx-react-lite';
import './style-document-editor.css'
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Context } from '../../index';
import TextEditorLogic from './text-editor-logic';
import { BlockType, InlineStyle, BLOCK_LABELS, BLOCK_RENDER_MAP, CUSTOM_STYLE_MAP} from './config';


function TextSection(props){
    useEffect(() => {
    }, [editorState])

    const {textEditorStore} = useContext(Context);
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const editorLogic = new TextEditorLogic()

    function handleKeyCommand(command, editorState) {
        console.log(command)
        const newState = RichUtils.handleKeyCommand(editorState, command);
     
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
     
        return 'not-handled';
    }

    const tabFunction = useCallback((event) => {
        if (event.key === "Tab") {
          console.log('asdadadad')
        }
      }, []);

    function _onTab(e) {
        const maxDepth = 1;
        setEditorState(RichUtils.onTab(e, editorState, 2));
    }

    function onBoldClick(){
        editorLogic.onBoldClick(setEditorState, editorState);
    }

    function myBlockStyleFn(contentBlock) {
        const type = contentBlock.getType();

        if(type === "header-one"){
            return 'H1';
        }
        if(type === "header-two"){
            return 'H2';
        }
        
        if(type === "unstyled"){
            return "unstyled"
        }

    }

    return(
        <section className='text-section'>
            <container className = 'EditorToolbar'>
                {/* BOLD */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                                editorState, setEditorState, InlineStyle.BOLD)
                    }>
                    <b>B</b>
                </button>  
                {/* ITALIC */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                                editorState, setEditorState, InlineStyle.ITALIC)
                    }>
                    <i>I</i>
                </button>   
                {/* UNDERLINE */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                                editorState, setEditorState, InlineStyle.UNDERLINE)
                    }>
                    <u>U</u>
                </button>      
                {/* ACCENT */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                            editorState, setEditorState, InlineStyle.ACCENT)
                    }>
                  <a>A</a>
                </button>  

                {/* H1 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h1)
                    }>
                  <a>H1</a>
                </button> 
                {/* H2 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h2)
                    }>
                  <a>H2</a>
                </button> 
                {/* H3 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h3)
                    }>
                  <a>H3</a>
                </button> 
                {/* H4 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h4)
                    }>
                  <a>H4</a>
                </button> 
                {/* H5 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h5)
                    }>
                  <a>H5</a>
                </button> 
                {/* H6 */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.h6)
                    }>
                  <a>H6</a>
                </button> 
                 {/* blockquote */}
                 <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.blockquote)
                    }>
                  <a>Цитата</a>
                </button>
                 {/* code */}
                 <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.code)
                    }>
                  <a>Код</a>
                </button>

                {/* list */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.list)
                    }>
                  <a>Маркированный список</a>
                </button>

                {/* orderList */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.orderList)
                    }>
                  <a>Нумерованный список</a>
                </button>

                {/* cite */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.cite)
                    }>
                  <a>Сноска</a>
                </button>

                {/* default */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetBlocStyle(
                            editorState, setEditorState, BlockType.default)
                    }>
                  <a>Обычный текс</a>
                </button>

                {/* Left */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                            editorState, setEditorState, InlineStyle.LEFT)
                    }>
                  <a>left</a>
                </button>

                {/* Center */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                            editorState, setEditorState, InlineStyle.CENTER)
                    }>
                  <a>center</a>
                </button>

                {/* right */}
                <button 
                    onMouseDown = {
                        () => editorLogic.SetInLineStyle(
                            editorState, setEditorState, InlineStyle.RIGHT)
                    }>
                  <a>right</a>
                </button>

                {/* tab */}
                {/* <button 
                    onMouseDown = {
                        () => editorLogic.Tab(
                            editorState, setEditorState, InlineStyle.RIGHT)
                    }>
                  <a>tab</a>
                </button> */}
                
            </container>
            <Editor 
                editorState={editorState} 
                onChange={setEditorState} 
                customStyleMap={CUSTOM_STYLE_MAP}
                blockRenderMap={BLOCK_RENDER_MAP}
                handleKeyCommand={handleKeyCommand}
                onTab={_onTab}
                blockStyleFn={myBlockStyleFn}
                />
        </section>
    )
}

export default observer(TextSection);