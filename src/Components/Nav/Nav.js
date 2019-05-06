import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Nav = ({updateTab}) => {
  return (
    <nav>
      <Button name={"People"} updateTab={updateTab} />
      <Button name={"Planets"} updateTab={updateTab} />
      <Button name={"Vehicles"} updateTab={updateTab} />
      <Button name={"Favorites"} updateTab={updateTab} />
    </nav>
  );
}

Nav.propTypes = {
  updateTab: PropTypes.func.isRequired
};

export default Nav;