import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from 'react-feather';

// components
import TopNav from '../../components/TopNav';
import TopPageInfo from '../../components/TopPageInfo';
import Hero from '../../components/Hero';
import DogDay from '../../components/DogDay';
import PostCards from '../../components/PostCards'

const Home = ({data, userData, addPup, pups }) => {

   document.title = 'eCompany Home'

   return(
      <div className='body'>
         <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
            <TopNav /> 
            <div className='content-body'>
               <div className='container pd-x-0'>
                  <TopPageInfo Title={'Welcome Back ' + userData.name.first} Crumb={'Dashboard'} Slug={'Home'}/>
                  <Hero />
                  <div className='row mg-l-0 mg-r-0 mg-b-10 justify-content-between'> 
                     <h6 className='tx-semibold tx-gray-800'>Latest Posts</h6>
                     <Link to="/archive">                     
                        <button type='button' className='btn btn-xs pd-0'>View All <ChevronRight className='grey-800' size={16} /></button>
                     </Link>
                  </div>
                  <div className='row pd-0'> 
                     <PostCards data={data} postLimit={3}/>                 
                  </div>
                  <h6 className='tx-semibold tx-gray-800  mg-t-10'>Todays Event</h6>
                  <div className='row align-self-stretch'> 
                     <DogDay addPup={addPup} pups={pups}/>  
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home