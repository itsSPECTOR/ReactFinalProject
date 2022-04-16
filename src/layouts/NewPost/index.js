import React from 'react';

// components
import TopNav from '../../components/TopNav';
import TopPageInfo from '../../components/TopPageInfo';
import Form from '../../components/Form';
import PostCardHorizontal from '../../components/PostCards/PostCardHorizontal';

const NewPost = ({ data, addPosts, postLimit }) => {

   document.title = 'Add New Post'

   const PostsList = data.slice(0, postLimit).map((card, index) => {
      return (
        <PostCardHorizontal key={index} 
          Title={data[index].title}
          Category={data[index].category}
          Content={data[index].content}
        />
      );
    });

   return(
      <div className='content ht-100v pd-0 pd-l-40 mg-l-200'>
         <TopNav />
         <div className='content-body'>
            <div className='container pd-x-0'>
               <TopPageInfo Title={'Create a New Post'} Crumb={'Post'} Slug={'Create'}/>
               <div className='row mg-0'> 
                  <div className='flex-fill pd-20 bg-white rounded-10'>                  
                     <Form addPosts={addPosts}/>
                  </div>
                  <div className='mg-l-10'>
                     <h4 className='tx-16 tx-semibold mg-b-20 mg-l-15'>Recent Posts</h4>
                     {PostsList}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NewPost