import React from 'react';
import Header from './Header/Header.js'
import SearchBar from './SearchBar/SearchBar.js'
import AdvancedSearchBar from './AdvancedSearchBar/AdvancedSearchBar.js';
import Footer from './Footer/Footer.js';

import './home.css'

function Home() {

  return (
    <div className="Search"> 
        <div className='SHeader'><Header /></div>
        <div className='SearchBar'> <SearchBar /> </div>
        {/* <div className='AdvancedSearch'> <AdvancedSearchBar/></div> */}
        <div className='SFooter'> <Footer/> </div>
    </div>
  );
}

export default Home;
