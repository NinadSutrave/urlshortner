import React, { useState } from 'react'
import './App.css';

const App = () => {

  const [clicks, setClicks] = useState();
  const [shortUrl, setShortUrl] = useState();

  const handleShorten = (e) => {

    e.preventDefault()    
    setShortUrl('http://localhost:5000/O8mL4XH_K')

  }

  const handleClick = (e) => {

    e.preventDefault()
    setClicks(5)

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

          <h1>
            Free URL Shortner Service
          </h1> 
        <form>
          <input 
            className="input" 
            type="text" 
            id="longurl"
            autocomplete="off"
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
          autocomplete="off"
          value={shortUrl}
        />
        </div>

        <div className="lower">
        <form>
          <input 
            className="input" 
            type="text" 
            id="longurl"
            autocomplete="off"
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
