import React, { useState } from 'react';
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
           <Image src='data:image/png;base64,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' width='10%' margin='auto' />
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
        marginTop="6" // Adjusted spacing here
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
