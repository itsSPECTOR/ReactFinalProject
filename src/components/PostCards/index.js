import React from 'react'
import PostCard from './PostCard'

const PostCards = (props) => {

    const PostsList = props.data.data.map((product, index) => {
        return (
          <PostCard key={index} 
            Title={props.data.data[index].title}
            Category={props.data.data[index].category}
            Content={props.data.data[index].content}
          />
        );
      });

    return(
    <div className='d-flex flex-fill'>
        {PostsList}
    </div>
    )
}

export default PostCards