import React, { useEffect, useState, useCallback } from 'react';
import Header from '../SearchUI/Header/Header.js'
import Footer from '../SearchUI/Footer/Footer';
import Title from './TitleBar/Title'
import ContentBar from './ContentBar/ContentBar.js'
import './home.css';
import { useNavigate } from 'react-router-dom'



function Home() {
  // console.log("ID", id)
  // if (id == null)
  // id = 3190;
  // id = 150;
  const [id, setId] = useState(-1);


  const [authorName, setAuthorName] = useState("");
  const history = useNavigate()


  useEffect(() => {
    console.log("In profile page")

    if (document.URL.includes('/profile')) {
      const url = document.URL;
      const id = url.substring(url.lastIndexOf('/') + 1);
      console.log(id, id);
      setId(id);
    }
    console.log(id);
  }, [history])

  useEffect(() => {
    if (id != -1) {
      fetchData(id);
     
    }
  }, [id]);

  const [bioInfo, setBioInfo] = useState([]);
  const [roles, setRoles] = useState([]);
  const [sources, setSources] = useState([]);
  const [works, setWorks] = useState([]);
  const [connections, setConnections] = useState([]);

  const fetchData = useCallback(async (id) => {
    const res = await fetch(`/people/${id}`);
    const resJson = await res.json();
    setBioInfo(resJson);
    setAuthorName(resJson.display_name)
    console.log(resJson);
    const attrib = resJson.attribs;
    const roles = await attrib.map((a) => { return a.name });
    setRoles(roles);
    // console.log(roles);
    const sources = [];
    sources.push(resJson.odnb_id);
    sources.push(resJson.dib_id);
    sources.push(resJson.tnop_id);
    sources.push(resJson.wikidata_id);
    sources.push(resJson.ainm_id);
    sources.push(resJson.sdfb);
    // console.log(sources);
    setSources(sources);

    const workRes = await fetch(`/people/${id}/works`);
    const workResJson = await workRes.json();
    console.log(workResJson);


    let works = workResJson.reduce((ac, a) => ac.find(x => x.id === a.id) ? [...ac] : [...ac, a], []);
    console.log(works);
    setWorks(works);


    const connectionsRes = await fetch(`/people/${id}/connections`);
    const connectionsResJson = await connectionsRes.json();
    console.log(connections, connectionsResJson);
    setConnections(connectionsResJson);

  }, [])

  return (
    <div className="Profile">
      <div className='Header'><Header /></div>
      <h1 className='Title'><Title author={authorName} /></h1>
      <div className='ContentBar'> <ContentBar bioInfo={bioInfo}  roles={roles} sources={sources} connections={connections} works={works}/> </div>
      {/* <div className='Footer'> <Footer/> </div> */}
    </div>

  );
}

export default Home;
