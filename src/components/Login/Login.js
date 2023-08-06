import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styles
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const history = useHistory();

  const handleButtonClick = () => {
    // Redirect to the target page with parameters
    history.push(`/home?param1=${username}`);
  };
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
          type="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button onClick={handleButtonClick} variant="contained" color="primary">Click to enter exciting journey!</Button>
      </form>
    </div>
  );
}

export default Login;
