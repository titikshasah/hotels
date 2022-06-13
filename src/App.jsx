import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { Route,Switch } from "react-router-dom";
function App() {
  return (
    <>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={Home}/>
    </Switch>
   
    </>
  );
}

export default App;
