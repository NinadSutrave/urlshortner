import React, { useState } from 'react'
import axios from 'axios'
import './App.css';

const App = () => {

  const [clicks, setClicks] = useState();
  const [shortUrl, setShortUrl] = useState();
  const [longInput, setLongInput] = useState();
  const [shortInput, setShortInput] = useState();

  const handleShorten = (e) => {
    e.preventDefault()    

    axios.post('http://localhost:5000/shortenUrl', {"longUrl": longInput})
      .then(res => setShortUrl(res.data.shortUrl))
      .catch(err => console.log(err.response.data.message))
      .catch(err => console.log(err.message))
  }

  const handleClick = (e) => {
    e.preventDefault()
    console.log(shortInput)
    axios.post('http://localhost:5000/clicks', {"shortUrl": shortInput})
      .then(res => setClicks(res.data.clicks))
      .catch(err => console.log(err.response.data.message))
      .catch(err => console.log(err.message))
  }

  const updateLongInput = (e) => {
    setLongInput(e.target.value)
  }

  const updateShortInput = (e) => {
    setShortInput(e.target.value)
  }

  return (
    <div className="App">
      <div className="Info">

        <div>
          <img className="logo" alt="logo" src={require("./assets/logo.png")} />

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

        <div className="parameter">
        <h1> 
          Teetsy Url: 
        </h1>
        <input
          className="shortUrl"
          type="text"
          id="shortUrl"
          autoComplete="off"
          value={shortUrl}
        />
        <button className="clipboard">
          <img className="copy" alt="copy-icon" src={require("./assets/copy.png")} />
        </button>
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
  );
}

export default App;