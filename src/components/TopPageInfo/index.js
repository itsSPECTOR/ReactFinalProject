import React from 'react'
import { File, Printer, Mail } from 'react-feather'

const TopPageInfo = (props) => {
   return(
      <div className="d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30">
         <div>
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-style1 mg-b-10">
               <li className="breadcrumb-item"><a href="#">{props.Title}</a></li>
               <li className="breadcrumb-item active" aria-current="page">Sales Monitoring</li>
            </ol>
         </nav>
         <h4 className="mg-b-0 tx-spacing--1 tx-sm-bold">Welcome to {props.Title}</h4>
         </div>
         <div className="d-none d-md-block">
         <button className="btn btn-sm pd-x-15 btn-white btn-uppercase"><Mail /> Email</button>
         <button className="btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5"><Printer /> Print</button>
         <button className="btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5"><File /> Generate Report</button>
         </div>
      </div>
   )
}

export default TopPageInfo