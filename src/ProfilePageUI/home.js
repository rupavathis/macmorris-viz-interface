import React, { useEffect, useState } from 'react';
import Header from '../SearchUI/Header/Header.js'
import Footer from '../SearchUI/Footer/Footer';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import './home.css'


function Home(id) {
  console.log("ID", id)
  if (id == null)
    id = 747;

  const[authorName, setAuthorName] = useState("");

  useEffect(() => {(async() => {
    const name = await fetch(`/people/${id}`);
    const nameJson = await name.json();
    setAuthorName(nameJson.display_name)
  })();}, [])

  return (
    <div className="Profile"> 
        <div className='Header'><Header /></div>
        <h1 className='Title'><Title author={authorName} /></h1>
        <div className='ContentBar'> <ContentBar /> </div>
        {/* <div className='Footer'> <Footer/> </div> */}
    </div>

  );
}

export default Home;
