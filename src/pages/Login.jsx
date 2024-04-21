// Login.jsx
import { Box, Button, Image, Input, Link, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setIsAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsAuth(true); // Set authentication state
      localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag in localStorage
      console.log('Authentication flag set in localStorage:', localStorage.getItem('isAuthenticated'));
      navigate('/'); // Redirect to homepage after successful login
    } else {
      alert('Invalid email or password');
    }
  };
  

  return (
    <div>
      {/* <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button> */}
          <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Box boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' display='flex' flexDir='column' gap='30px' width={{ base:'90%', md:'70%', lg:'30%' }} margin='auto' padding='30px'>
        <Box margin='auto' display='flex' flexDir='column' justifyContent='center' gap='10px'>
         <Text textAlign='center' padding='30px' fontSize='2rem'>Welcome Back</Text>
          <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button backgroundColor='#10a37f' onClick={handleLogin}>Login</Button>
          <Text textAlign='center'>Don't have an account? <Link color='#10a37f' href='/signup'>Sign Up</Link></Text>
        </Box>
     
      </Box>
    </Box>
    </div>
  );
};

export default Login;