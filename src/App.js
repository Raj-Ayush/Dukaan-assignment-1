import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import './App.css'
import Home from './component/Home/index';
import Footer from './component/Footer/index';




function App() {
  return (
    <div className="App">
      <div className="content">
        <Jumbotron>
          <Home/>
        </Jumbotron>
        </div>
        <Footer/>  
    </div>
  );
}

export default App;
