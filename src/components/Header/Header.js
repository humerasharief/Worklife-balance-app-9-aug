import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import { useLocation } from 'react-router-dom';
import Analytics from '../Analytics/Analytics';
const Header = () => {
    const location = useLocation();
  return (
    <header className="header">
      <h1>Work Life Balancer Application </h1>
      <nav className="navigation"  >
          <ul className="nav-list">
            <li className={location.pathname === '/home' ? 'active' : ''}>
              <NavLink exact to="/home">
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

