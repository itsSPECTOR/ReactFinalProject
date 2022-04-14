import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import TopNav from '../../components/TopNav';
import TopPageInfo from '../../components/TopPageInfo';
import Hero from '../../components/Hero';
import Table from '../../components/Table';
import Stats from '../../components/Stats';
import PostCards from '../../components/PostCards'

const Home = (props) => {

   document.title = 'eCompany Home'

   return(
      <div className='body'>
         <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
            <TopNav /> 
            <div className='content-body'>
            <div className='container pd-x-0'>
               <TopPageInfo Title={'Welcome Back ' + props.userData.name.first} Crumb={'Dashboard'} Slug={'Home'}/>
               <Hero />
               <div className='row'> 
                  <PostCards data={props}/>                 
               </div>
               <div className='row align-self-stretch'> 
                  <Table />  
                  <Stats />
               </div>
            </div>
            </div>
         </div>
      </div>
   )
}

export default Home