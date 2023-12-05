import './banner.css'
import * as React from 'react';
import img from '../assets/images/img.png'
// import fav from '../assets/images/favicon.png'
// import Navbar from '../Navbar';

const Banner = () => {

  return (
    <header className='banner'>
      <img src={img} alt='Pablo`s' />
      <div className='headline'>
        <h1>PABLO EMBARACH</h1>
        <h2>Full Stack Developer</h2>
        <h3>&lt;turning ideas into reality through codes&gt;</h3>
        {/* <Navbar /> */}
      </div>
    </header>
  )
}

export default Banner
