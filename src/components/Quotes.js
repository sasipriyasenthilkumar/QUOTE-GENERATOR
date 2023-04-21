import React, { useState, useEffect } from 'react';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";


const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color,setColor]= React.useState("#111")

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    const colors =["#57FEFF","#00FFFF","#7FFFD4","#01F9C6","#46C7C7	","#20B2AA","#00827F","#347C17","#6CBB3C","#DAEE01","#E8A317","#EB5406","#F67280"

    ];
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
         let randColorIndex = Math.floor(Math.random() * colors.length);
         
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        setColor(colors[randColorIndex]);

      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div style={{backgroundColor:color,minHeight:"65vh"}}>
    
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>  
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
          </a>
            
          <a href="#" id="tumlr-quote">
        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Quote</button>
      </div>
    </div>
    </div>
    
  )
}

export default Quotes;