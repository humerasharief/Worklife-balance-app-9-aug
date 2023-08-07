import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import './globalStyles.css';
import Header from './components/Header/Header';
import Analytics from './components/Analytics/Analytics';
import Introduction from './components/Introduction/Introduction';
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route exact path="/intro" component={Introduction} />
          <Route exact path="/analytics" component={Analytics} />
        </Switch> 
      </Router>
    </>
  );
};

export default App;
