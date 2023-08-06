import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import './globalStyles.css';
import Header from './components/Header/Header';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
