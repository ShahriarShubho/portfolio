import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Contract from './Components/Contract/Contract';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Projects/>
      <Services/>
      <About/>
      <Skill/>
      <Contract/>
      <Footer/>
    </div>
  );
}

export default App;
