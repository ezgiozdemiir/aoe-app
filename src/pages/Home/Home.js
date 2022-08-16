import React from 'react';

import logo from '../../assets/images/logo.png';

import './Home.scss';

const Home = () => {
  return (
    <div
      className='home-container'
      style={{ backgroundImage: `url(${logo})` }}
    ></div>
  );
};

export default Home;
