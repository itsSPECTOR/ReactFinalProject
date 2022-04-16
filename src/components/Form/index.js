import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Plus, AlertTriangle, Calendar } from 'react-feather'
import { Dropdown } from 'react-bootstrap'
import removeHTML from '../../hooks/removeHTML';

const Form = ({ addPosts }) => {

   const [textBox, setTextBox] = useState('');
   const [category, setCategory] = useState('Uncategorized')

   // modal form refs
   const titleRef = useRef(null);
 
   const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
   }

   const handleDropDown = (cat) => {
      setCategory(cat)
   }

   const handleSubmit = () => {

      const newPost = {
         title:    titleRef.current.value,
         content:  removeHTML(textBox),
         category: category
      }
      addPosts(newPost)
      console.log(category)
      setTextBox('')
      titleRef.current.value = ""
   }

   return(
      <div className='pd-20'>
         <div className='d-flex '>
            <div className='flex-grow-1 mg-r-20'>
               <h4 className='tx-16 tx-semibold mg-b-20'>Post Title</h4>
               <div className=''>
                  <input ref={titleRef} type="text" className="form-control mg-r-5" placeholder="Add your title here..."></input>
               </div>
            </div>
            <div className='mg-l-auto'>
               <h4 className='tx-16 tx-semibold mg-b-20'>Category</h4>
               <Dropdown className=''>
                  <Dropdown.Toggle className="btn btn-outline-primary" variant="" id="dropdown-basic">
                  {category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.Item as="button" eventKey="1" onClick={()=>handleDropDown('Alert')}>
                        <AlertTriangle className="mg-b-3 mg-r-3" size={16}/> Alert
                     </Dropdown.Item>
                     <Dropdown.Item as="button"  eventKey="2" onClick={()=>handleDropDown('Event')}>
                        <Calendar className="mg-b-3 mg-r-2" size={16}/> Event
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </div>
         </div>
         <div className='flex-grow-1 mg-t-50 pd-b-50'>
            <h4 className='tx-16 tx-semibold mg-b-20'>Post Content</h4>
            <ReactQuill className="ht-200" modules={modules} value={textBox} onChange={setTextBox}/>
         </div>
         <button type="button" onClick={handleSubmit} className="btn btn-sm mg-t-10 pd-x-15 btn-primary btn-uppercase">
            <Plus className="mg-r-5"/>
            Create Post
         </button>
      </div>
   )
}

export default Form