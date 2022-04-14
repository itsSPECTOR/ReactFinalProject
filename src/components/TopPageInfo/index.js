import React, { useState } from 'react'
import { Plus } from 'react-feather'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TopPageInfo = (props) => {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   return(
      <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
         <div>
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
               <li className="breadcrumb-item"><a href="#">{props.Crumb}</a></li>
               <li className="breadcrumb-item active" aria-current="page">{props.Slug}</li>
            </ol>
         </nav>
         <h4 className="mg-b-0 tx-spacing--1 tx-sm-bold">{props.Title}</h4>
         </div>
         <div className="d-none d-md-block">
            {/* <button className="btn btn-sm pd-x-15 btn-white btn-uppercase">Email</button>
            <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><Printer /> Print</button>
            <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><File /> Generate Report</button> */}

            <Dropdown>
               <Dropdown.Toggle className="btn btn-sm pd-x-25 btn-primary btn-uppercase mg-r-0 dropdown-toggle " id="dropdown-basic">
                  <Plus /> <span className='pd-r-5'>Add New</span>
               </Dropdown.Toggle>

               <Dropdown.Menu>
                  <Link to="/">                  
                     <button to="/" className="dropdown-item">Home</button>
                  </Link>
                  <Link to="/create">                  
                     <button to="/create" className="dropdown-item">Create Post</button>
                  </Link>
                  {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
               </Dropdown.Menu>
            </Dropdown>
         </div>
      </div>
   )
}

export default TopPageInfo