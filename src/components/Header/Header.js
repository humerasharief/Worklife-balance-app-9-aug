import React from 'react';
import './Header.css'; // Import the CSS file for styling
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Analytics from '../Analytics/Analytics';
import Login from '../Login/Login';
import Introduction from '../Introduction/Introduction';
const Header = () => {
    const location = useLocation();
  return (
    <header className="header">
      <h1>Work Life Balancer Application </h1>
      {location.pathname !== '/' ?  
        (<nav className="navigation"  >
          <ul className="nav-list">
            <li className={location.pathname === '/intro' ? 'active' : ''}>
              <NavLink exact to="/intro">
                Introduction
              </NavLink>
            </li>
            <li className={location.pathname === '/home' ? 'active' : ''}>
              <NavLink exact to="/home">
                Dashboard
              </NavLink>
            </li>
            <li className={location.pathname === '/analytics' ? 'active' : ''}>
              <NavLink exact to="/analytics">
                Analytics
              </NavLink>
            </li>
          </ul>
        </nav>) : null}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/intro" component={Introduction} />
          <Route exact path="/analytics" component={Analytics} />
        </Switch>
    </header>
  );
};

export default Header;

