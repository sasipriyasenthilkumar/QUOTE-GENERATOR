import React from 'react';
import Quotes from './components/Quotes';
import './App.css';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
  
    <center>
    <h1 >RANDOM QUOTE GENERATOR </h1>
    </center>
      <Quotes />
      <Footer/>
    </div>
  );
}

export default App;