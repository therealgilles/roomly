import React from 'react';
import { IndexLink, Link } from 'react-router';
import './Header.scss';

export const Header = () => (
  <div>
    <h1>Roomly</h1>
    <IndexLink to='/login' activeClassName='route--active'>Log in</IndexLink>
  </div>
);

export default Header;
