import React from 'react';
import Button from '../Button/Button';

const Nav = () => {
  return(
    <nav>
      <Button name={'People'} />
      <Button name={'Planets'} />
      <Button name={'Vehicles'} />
      <Button name={'Favorites: 0'} />
    </nav>
  )
}

export default Nav;