import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

   const [value, setValue] = useState('');
   console.log(value)

   const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    }

   return(
      <>
         <ReactQuill className="ht-200" theme="snow" modules={modules} value={value} onChange={setValue}/>
      </>
   )
}

export default TextEditor