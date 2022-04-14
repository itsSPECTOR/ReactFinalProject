import React from 'react'
import TextEditor from './TextEditor/'
import { Plus, AlertTriangle, Calendar } from 'react-feather'
import { Dropdown } from 'react-bootstrap'

const Form = () => {

   const handleSubmit = () => {
      console.log('grewewr')
   }

   return(
      <div className='pd-20'>
         <div className='d-flex '>
            <div className='flex-fill mg-r-20 flex-grow-1'>
               <h4 className='tx-16 tx-semibold mg-b-20'>Post Title</h4>
               <div className=''>
                  <input type="text" className="form-control mg-r-5" placeholder="Add your title here..."></input>
               </div>
            </div>
            <div className=''>
               <h4 className='tx-16 tx-semibold mg-b-20'>Post Category</h4>
               <Dropdown className='flex-grow-1 '>
                  <Dropdown.Toggle className="btn btn-outline-primary" variant="" id="dropdown-basic">
                     Select Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">
                        <AlertTriangle className="mg-b-3 mg-r-3" size={16}/> Alert
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-1">
                        <Calendar className="mg-b-3 mg-r-2" size={16}/> Event
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </div>
         </div>
         <div className='flex-grow-1 mg-t-50 pd-b-50'>
            <h4 className='tx-16 tx-semibold mg-b-20'>Post Content</h4>
            <TextEditor />
         </div>
         <button onClick={handleSubmit} className="btn btn-sm mg-t-10 pd-x-15 btn-primary btn-uppercase">
            <Plus className="mg-r-5"/>
            Create Post
         </button>
      </div>
   )
}

export default Form