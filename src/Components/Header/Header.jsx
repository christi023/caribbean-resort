import React from 'react';
import defaultImg from '../../images/room-3.jpeg';
//import Banner from '../Banner/Banner';

// style
import './Header.css';

const Header = (props) => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${props.img ? props.img : defaultImg}) `,
      }}
    ></div>
  );
};

export default Header;
