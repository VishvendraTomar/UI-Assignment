// Signup.jsx
import React, { useState } from 'react';
import { Box, Button, Image, Input, Link, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    let use = localStorage.getItem("user")
    console.log("working")
    console.log(use)
    navigate('/login'); 

  };


  return (
  
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
    <Box
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      display="flex"
      flexDir="column"
      gap="30px"
      width={{ base: '90%', md: '70%', lg: '30%' }}
      margin="auto"
      padding="30px"
    >
      <Box margin="auto" display="flex" flexDir="column" justifyContent="center" gap="10px">
       <Text textAlign="center" padding="30px" fontSize="2rem">
          Create an Account
        </Text>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button backgroundColor="#10a37f" onClick={handleSignup}>
          Continue
        </Button>
        <Text textAlign="center">
          Already have an account? <Link color="#10a37f" href='/login'>Login</Link>
        </Text>
      </Box>
    
    
    </Box>
    
  </Box>
  );
};

export default Signup;
