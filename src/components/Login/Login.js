import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styles
import { Link } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    //history.push('/home');
    // Add logic to validate and handle the login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Enroll for Healthy Lifestyle</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to={`/home/${encodeURIComponent(username)}`}>Click to enter exciting journey!</Link>
        
      </form>
    </div>
  );
}

export default Login;
