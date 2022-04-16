import React from 'react'
import TopNav from '../../components/TopNav'
import PostCards from '../../components/PostCards'
import { ChevronLeft } from 'react-feather';
import { Link } from "react-router-dom";

const Archive = ({ data }) => {
   return (
      <div className='body'>
         <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
            <TopNav /> 
            <div className='content-body'>
               <div className='container pd-x-0 '>
                  <div className='row mg-l-0 mg-r-15 mg-b-5 justify-content-between'> 
                     <Link to="/">                     
                        <button type='button' className='btn btn-xs'><ChevronLeft size={16} />Back</button>
                     </Link>
                     <h6 className='tx-semibold tx-gray-800'>Latest Posts</h6>
                  </div>
                  <PostCards data={data} postLimit={12}/>
               </div>
            </div>
         </div>
      </div>   
   )
}

export default Archive