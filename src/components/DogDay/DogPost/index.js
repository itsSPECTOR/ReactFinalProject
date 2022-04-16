import React from "react";
import { Activity } from "react-feather";

const DogPost = ({ name, text, img }) => {

   return(
      <div className="col-lg-4 col-xl-4 mg-t-0 pd-t-10">
          <div className="card dog-pic">
            <div className="card-body pd-0">
            <h4 className="mg-b-0 pd-20 pos-absolute tx-bold tx-white"><Activity /></h4>
              <div className='dog-image'>
                  <img src={img}></img>
              </div>
            </div>
            <div className="card-footer pd-20">
               <h6 className="tx-semibold">{name}</h6>
                <p className="">{text}</p>
            </div>
          </div>
      </div>
   )
}

export default DogPost