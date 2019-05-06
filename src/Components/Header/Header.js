import React from 'react';
import Nav from '../Nav/Nav';
import PropTypes from 'prop-types';

const Header = ({updateTab}) => {
  return (
    <header>
      <h1>SWapi Box</h1>
      <Nav updateTab={updateTab} />
    </header>
  )
}

Header.propTypes = {
  updateTab: PropTypes.func.isRequired
}

export default Header;