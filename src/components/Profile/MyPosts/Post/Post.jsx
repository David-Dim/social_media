import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://images-platform.99static.com//dKP-vgUb3KMWmix2-FSCrRYHTY0=/204x210:748x754/fit-in/500x500/99designs-contests-attachments/137/137297/attachment_137297371"></img>
      <h3>{props.message}</h3>
      <div>like {props.like}</div>
      <div>dislike</div>
    </div>
  )
}
export default Post
