import React from 'react'
import { AlertTriangle, Calendar } from 'react-feather'
import '../styles.css'

const PostCard = (props) => {

    return(
    <div className="col-sm-4 mg-t-10 mg-sm-t-0 col-lg-4 break">
        <div className="card card-body">
            <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">
                {props.Category === 'Alert' 
                ? <AlertTriangle className='mg-r-5 mg-b-2 tx-danger' size={14} /> 
                : <Calendar className='mg-r-5 mg-b-2 tx-primary' size={14} />}
                {props.Category}
            </h6>
            <div className="d-flex d-lg-block d-xl-flex align-items-end">
            <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{props.Title}</h3>
            </div>
            <p className="tx-11 tx-color-03 mg-t-10"><span className="tx-medium tx-grey">{props.Content}</span></p>
        </div>
    </div>
    )
}

export default PostCard