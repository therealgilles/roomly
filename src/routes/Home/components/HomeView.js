<<<<<<< HEAD
import React from 'react';
import DuckImage from '../assets/Duck.jpg';
import './HomeView.scss';
import { Card, CardTitle } from 'react-materialize';

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
      <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
    I am a very simple card.
    </Card>

=======
import React from 'react'
import CoverPhoto from '../assets/coverphoto.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className='jumbotron'>
    <div className='container'>
      <h1>Welcome to Roomy</h1>
      <img src={CoverPhoto} />
    </div>
>>>>>>> master
  </div>
);

export default HomeView;
