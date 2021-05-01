import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
    </div>
  );
}

export default App;
