import React from 'react'
import CoverPhoto from '../assets/coverphoto.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className='jumbotron'>
    <div className='container'>
      <h1>Welcome to Roomy</h1>
      <img src={CoverPhoto} />
    </div>
  </div>
)

export default HomeView
