import React, { useEffect, useState } from 'react';
import Header from '../SearchUI/Header/Header.js'
import Footer from '../SearchUI/Footer/Footer';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import './home.css';


function Home() {
  // console.log("ID", id)
  // if (id == null)
    // id = 3190;
    // id = 150;
  const [id, setId] = useState(-1);
    

  const[authorName, setAuthorName] = useState("");

  useEffect(() => {
    console.log("In profile page")
    
    if(document.URL.includes('/profile')){    
      const url = document.URL;  
      const id = url.substring(url.lastIndexOf('/') + 1);
      console.log(id, id);
      setId(id);
    }
    console.log(id);       
  },[])

  useEffect(() => {
    if(id != -1){
      (async() => {
        const name = await fetch(`/people/${id}`);
        const nameJson = await name.json();
        setAuthorName(nameJson.display_name)
      })();}},[id]);

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
