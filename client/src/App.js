import React, { useState } from 'react'
import axios from 'axios'
import shortid from 'shortid'
import './App.css';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'


const App = () => {

  const [clicks, setClicks] = useState()
  const [code, setCode] = useState()
  const [longUrl, setLongUrl] = useState()
  const [shortUrl, setShortUrl] = useState()
  

  const [availibility, setAvailibility] = useState("Available")

  const handleShorten = (e) => {
    e.preventDefault()
    const getCode = shortid.generate()
    setCode(getCode)
  }

  const handleSave = async (e) => {

    axios.post('/create', {"code": code, "longUrl": longUrl})
    .then(res => setShortUrl(res.data.shortUrl))
    .catch(err => console.log(err.response.data.message))
    .catch(err => console.log(err.message))

    const shortUrl = process.env.REACT_APP_BASE_URL + code
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(shortUrl);
    } 
    else {
      return document.execCommand('copy', true, shortUrl);
    }

  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(shortUrl)
    axios.post('/clicks', {"shortUrl": shortUrl})
      .then(res => setClicks(res.data.clicks))
      .catch(err => console.log(err.response.data.message))
      .catch(err => console.log(err.message))
  }

  const updateCode = (e) => {
    setCode(e.target.value)

    console.log(e.target.value)

    axios.get('/search', { params: {
      searchItem: e.target.value
    }})
    .then(res => setAvailibility(res.data.message))
    .catch(err => console.warn(err));
  }

  const updateLongInput = (e) => {
    setLongUrl(e.target.value)
  }

  const updateShortInput = (e) => {
    setShortUrl(e.target.value)
  }

  return (
    <>
    <div className="Homepage">
      <Header />
      <Body />
      <Footer />
    </div>

    <div className="App">
      <div className="Info">

        <div>

            <ul>
              <li>Track number of clicks</li>
              <li>Convenient sharing via posters</li>
              <li>Stronger engagement</li>
              <li>Professional appearance</li>
            </ul>

        </div>
        
      </div>
      <div className="Form">

        <div className="upper">

          <h1 className="header">
            Free URL Shortner Service
          </h1> 
        <form>
          <input 
            className="input" 
            type="text" 
            id="longurl"
            autoComplete="off"
            onChange = {updateLongInput}
          />
          <input 
            className="submit" 
            type="submit" 
            value="Shorten URl"
            onClick = {handleShorten}
          />
        </form>
        </div>

        <div>
          Want a custom code? Edit below to check if it's available
        </div>

        <div className="parameter">
        <h1> 
          Teetsy Url: 
        </h1>
        <h4 className="shortUrl">
          {process.env.REACT_APP_BASE_URL}
        </h4>
        <input
          className="urlCode"
          type="text"
          id="urlCode"
          autoComplete="off"
          value={code}
          onChange={updateCode}
        />

        <div 
          className="indicators"
          style= {code?{display:'initial'}:{display:'none'}}
        >
        {(availibility == "Available")?<button className="icon" id="available" />:<button className="icon" id="reserved" />}
        </div> 
        </div>

        <div>
          (Use alphanumeric or '-, '_' characters only)
        </div>

        <div className="middle">
          <input 
            className="save" 
            type="submit" 
            value="Save and Copy"
            onClick={handleSave}
          />
        </div>

        <div className="lower">
        <form>
          <input 
            className="input" 
            type="text" 
            id="longurl"
            autoComplete="off"
            onChange = {updateShortInput}
          />
          <input 
            className="submit" 
            type="submit" 
            value="No of Clicks"
            onClick = {handleClick}
          />
        </form>
        <div className="parameter">
        <h1> 
          Clicks: 
        </h1>
        <h2>
          {clicks}
        </h2>
        </div>

        </div>


      </div>
      
    </div>
    </>
  );
}

export default App;