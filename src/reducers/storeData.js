import React from 'react'
import postArr from '../posts'

const storeData = (state = postArr, action) => {

  console.log("STATE OBJ // INIT //", state)  

  switch (action.type) {
    case 'ADD':
      return {
        ...state, posts: [
          state.post,
          {
            category: action.category,
            content: action.content,
            title: action.title
          }
        ]
      }
    case 'REMOVE':
      return {
        post: (state.post -= action.value)
      }
    case 'RESET':
      return {
        post: state.post = action.value
      }
    default:
      return {
        post: state
      }
  }
}

export default storeData