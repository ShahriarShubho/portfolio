import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Contract from './Components/Contract/Contract';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Services/>
      <About/>
      <Skill/>
      <Contract/>
    </div>
  );
}

export default App;
