import React, { useState } from 'react';
import { Button, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });

  const navigate = useNavigate();

  // Handle input changes
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle registration
  const registerHandler = () => {
    if (!input.name || !input.email || !input.password || !input.gender) {
      alert('All fields are required!');
      return;
    }

    console.log('Sending data to backend:', input);

    axios
      .post('http://localhost:3004/reg', input, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log('Response received:', res.data);
        alert(res.data.message);
        navigate('/login'); // Navigate to login page on success
      })
      .catch((err) => {
        console.error('Error during registration:', err);
        alert('Registration failed! Please try again.');
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 500,
          margin: '20px auto',
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={input.name}
          onChange={inputHandler}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={input.email}
          onChange={inputHandler}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={input.password}
          onChange={inputHandler}
          fullWidth
          margin="normal"
        />
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={input.gender}
            onChange={inputHandler}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" onClick={registerHandler} fullWidth>
          Register
        </Button>
        <small>By continuing you agree to our terms of service and privacy policy.</small>
      </Box>
    </div>
  );
};

export default Registration;
