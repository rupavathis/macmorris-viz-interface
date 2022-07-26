import React from 'react';
import Header from '../SearchUI/Header/Header.js'
import Footer from '../SearchUI/Footer/Footer';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import './home.css'


function Home() {

  return (
    <div className="Home"> 
        <div className='Header'><Header /></div>
        <h1 className='Title'><Title /></h1>
        <div className='ContentBar'> <ContentBar /> </div>
        <div className='Footer'> <Footer/> </div>
    </div>

  );
}

export default Home;
