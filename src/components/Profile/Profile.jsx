import React from 'react'
import MyPosts from './MyPosts/MyPosts'

import s from './Profile.module.css'
const Profile = (props) => {
  return (
  <div className={s.content}>
  <div>
    <img
      src="https://www.abercrombiekent.com/-/media/ak/media-for-prod/destinations/mastheads/americas-argentina-perito-moreno-glacier-mh.jpg?h=660&w=1920&la=en&hash=039B01BEB6D6035D041C4E68661B993E"
      title="Global Hotness"
      className="big-img"
    ></img>
  </div>
  <div className="ava">
    <h2>{props.section}</h2>
    <p>ndjcksdcndksjcndjksnckjs</p>
    <img
      src="https://images-platform.99static.com//dKP-vgUb3KMWmix2-FSCrRYHTY0=/204x210:748x754/fit-in/500x500/99designs-contests-attachments/137/137297/attachment_137297371"
      title="profile1"
    ></img>
  </div>
  <MyPosts />
  </div>

  )
}
export default Profile
