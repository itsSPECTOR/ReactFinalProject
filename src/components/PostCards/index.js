import React from 'react'
import PostCard from './PostCard'
import './styles.css'

const PostCards = ({ data, postLimit }) => {

    const PostsList = data.slice(0, postLimit).map((product, index) => {

        return (
          <PostCard 
            key={index} 
            Title={data[index].title}
            Category={data[index].category}
            Content={data[index].content}
          />
        );
      });

    return(
    <div className='d-flex flex-fill break'>
        {PostsList}
    </div>
    )
}

export default PostCards