import Immutable from "immutable";
import { DraftEditorCommand, DefaultDraftBlockRenderMap } from "draft-js";
import React from "react";

export const EntityType = {
  link: "link",
}

export const BlockType = {
  h1 : "header-one",
  h2 : "header-two",
  h3 : "header-three",
  h4 : "header-four",
  h5 : "header-five",
  h6 : "header-six",
  blockquote : "blockquote",
  code : "code-block",
  list : "unordered-list-item",
  orderList : "ordered-list-item",
  cite : "cite",
  default : "unstyled",
  alignCenter : "alignCenter"
}

export const InlineStyle = {
  BOLD : "BOLD",
  ITALIC : "ITALIC",
  UNDERLINE : "UNDERLINE",
  ACCENT : "ACCENT",
  LEFT : "LEFT",
  CENTER : "CENTER",
  RIGHT: "RIGHT"
}

export const alignStyleMap = {
    left: "text-align: left",
    center: "rolor: red",
    right: "text-align: right",
  };

const CUSTOM_BLOCK_RENDER_MAP = Immutable.Map({
  [BlockType.cite]: {
    element: "cite",
  },
  [BlockType.alignCenter]:{
    element: 'section',
    wrapper: <MyCustomBlock />
  }
});

export const BLOCK_RENDER_MAP = DefaultDraftBlockRenderMap.merge(
  CUSTOM_BLOCK_RENDER_MAP
);

export const CUSTOM_STYLE_MAP = {
  [InlineStyle.ACCENT]: {
    backgroundColor: "#FFEB3B",
    color: "red",
  }, 
  [InlineStyle.LEFT]: {
    display: 'block',
    textAlign: "left"
  },
  [InlineStyle.CENTER]: {
    display: 'block',
    textAlign: "center"
  },
  [InlineStyle.RIGHT]: {
    display: 'block',
    textAlign: "right"
  }
};


function MyCustomBlock(props){
  return (
    <div className='MyCustomBlock'>
      {props.children}
    </div>
  );
} 
