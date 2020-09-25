import Head from 'next/head';
import { Button, Heading, Text, Code, Icon, Box, Flex } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <Flex
      as='main'
      direction='column'
      align='center'
      justify='center'
      h='100vh'
    >
      <Head>
        <title>Create Next App</title>
      </Head>

      <Heading>Fast Feedback</Heading>
      <Icon name='logo' color='black' size='64px'></Icon>
      {auth.user ? (
        <Button onClick={(e) => auth.signout()}>Sign Out</Button>
      ) : (
        <Button mt={4} size='sm' onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
