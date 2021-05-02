import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Projects from "./Components/Home/Projects/Projects";
import NotFound from "./Components/NotFound/NotFound";
import Blogs from "./Components/Home/Blogs/Blogs";
import Contract from "./Components/Home/Contract/Contract";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
         <Projects/>
        </Route>
        <Route path="/contract">
         <Contract/>
        </Route>
        <Route path="/blogs">
         <Blogs/>
        </Route>
        <Route path="*">
         <NotFound/>
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
