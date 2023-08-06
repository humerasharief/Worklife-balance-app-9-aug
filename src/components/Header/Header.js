import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Analytics from '../Analytics/Analytics';
const Header = () => {
  return (
    <header className="header">
      <h1>Work Life Balancer Application </h1>
      <nav>
          <ul className="nav-links">
            <li>
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" activeClassName="active">
                Analytics
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/analytics" component={Analytics} />
        </Switch>
    </header>
  );
};

export default Header;

