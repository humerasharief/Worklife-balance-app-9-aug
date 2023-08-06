import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styles
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const history = useHistory();
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const handleButtonClick = () => {
    // Redirect to the target page with parameters
    console.log(isNameValid && isAgeValid)
    if(isNameValid && isAgeValid)
      history.push(`/intro?param1=${username}&param2=${age}&param3=${selectedOption}`);
    else 
      setIsErr(true);
  };

  const handleShowToaster = () => {
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };

  const [selectedOption, setSelectedOption] = useState('male');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Enroll for Healthy Lifestyle</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            if(e.target.value.length > 0)  {
              setUsername(e.target.value);
              setIsNameValid(true); 
            } else setIsNameValid(false);}}
        />
        <input
          type="age"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            if(e.target.value.length > 0)  {
              setAge(e.target.value);
              setIsAgeValid(true); 
            } else setIsNameValid(false);}}
        />
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {isErr && <p >Please fill name & age to proceed further</p>}
        <div className="box">
          <Button onClick={handleButtonClick} variant="contained" color="primary">Click to enter exciting journey!</Button>
        </div>        
      </form>
    </div>
  );
}

export default Login;
