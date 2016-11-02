import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
  <div>
    <h1>Roomly</h1>
    <Link to="/login">Log in</Link>
    <Link to="/signup">Sign up</Link>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
  </div>
);

export default Header;
