import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div className={s.posts}>
    <h2>My posts</h2>
    <textarea></textarea>
    <button>Add post</button>
   <Post message='Hi, how are you?'
    like='15'
   />
   <Post message="It's my first post" />
   
  </div> 
  )
}
export default MyPosts
