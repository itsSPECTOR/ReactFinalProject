import React from 'react'
import { Zap } from 'react-feather'

const Hero = () => {
   return(
      <div className="card card-body mg-b-25 bg-primary pd-t-30">
         <div className="tx-white pd-b-20"><Zap size={24}/></div>
         <h6 className="tx-uppercase tx-20 tx-spacing-1 tx-white tx-bold mg-b-8">Hero Banner</h6>
         <div className="pd-b-20 d-lg-block align-items-end ">
            <h3 className="pd-t-10 pd-b-10 tx-normal tx-16 tx-rubik mg-b-0 mg-r-5 lh-1 tx-white-6">Company Notification!</h3>
            <p className="tx-15 mg-b-0"><span className="tx-medium tx-white-8">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor 
               incididunt ut labore et dolore. 
            </span></p>
          </div>
      </div>
   )
}

export default Hero