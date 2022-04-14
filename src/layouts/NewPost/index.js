import React from 'react';

// components
import TopNav from '../../components/TopNav';
import TopPageInfo from '../../components/TopPageInfo';
import Form from '../../components/Form';
import PostCardHorizontal from '../../components/PostCards/PostCardHorizontal';

// data for testing
import PostsArr from '../../posts';

const NewPost = (props) => {

   document.title = 'Add New Post'

   const PostsList = PostsArr.map((card, index) => {
      return (
        <PostCardHorizontal key={index} 
          Title={PostsArr[index].title}
          Category={PostsArr[index].category}
          Content={PostsArr[index].content}
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
                     <Form />
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