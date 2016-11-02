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

  </div>
);

export default HomeView;
