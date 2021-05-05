import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Home/Services/Services";
import Projects from "./Components/Home/Projects/Projects";
import Blogs from "./Components/Home/Blogs/Blogs";
import About from "./Components/Home/About/About";
import Skill from "./Components/Home/Skill/Skill";
import Contract from "./Components/Home/Contract/Contract";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/skill">
           <Skill/>
          </Route>
          <Route path="/contract">
           <Contract/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
