import React, { useState } from 'react';
import modelImage from '../assets/gpt.png';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  Text,
  Image,
  Stack,
  Heading,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    let user = localStorage.getItem("user");
    console.log("working");
    console.log(user);
    toast({
      title: 'Sign up, Successful',
      description: 'Redirecting to Login page',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    navigate('/login');
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      flexDir="column">
      <Stack spacing={6} mx={'auto'} mt={70} maxW={'lg'} py={12} px={6}>
        <Stack spacing={6} align={'center'}>
           <Image src={modelImage} width='10%' margin='auto' />
          <Heading  fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
      </Stack>   
      <Box
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        display="flex"
        flexDir="column"
        gap="30px"
        width={{ base: '90%', md: '70%', lg: '30%' }}
        margin="auto"
        padding="30px"
        marginTop="6" 
      >
        <Box margin="auto" display="flex" flexDir="column" justifyContent="center" gap="10px">
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            backgroundColor="#10a37f"
            onClick={handleSignup}
            style={{ margin: '0 auto', width: '100%' }}>
            Continue
          </Button>
          <Text textAlign="center">
            Already have an account? <Link color="#10a37f" href='/login'>Login</Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Signup;
