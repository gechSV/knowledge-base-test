// import { observer } from 'mobx-react-lite';
// import React, { useContext, useEffect, useState, useRef} from 'react';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

// function TextEditor(){
//     const onWriterChange = (event, editor) => {
//         console.log("Some changes !");
//     }
//     const [editor, setEditor] = useState(null);

//     return (
//         <CKEditor
//           editor={ClassicEditor}      
//           onReady={(e) => setEditor(e)}
//           onChange={onWriterChange}
//           config={{
//                    toolbar: [['Bold'], ['Italic'], ['Underline'], ['Heading'], 
//                             ['BulletedList'],   ['NumberedList'], ['Link']]
//           }}
//          />
//     )
    
// }

// export default (TextEditor)


import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TextEditor extends Component {
    render() {
        return (
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor&nbsp;5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        );
    }
}

export default TextEditor;