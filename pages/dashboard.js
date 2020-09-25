import Head from 'next/head';
import { Button, Heading, Text, Code, Icon, Box, Flex } from '@chakra-ui/core';
import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState></EmptyState>;
};

export default Dashboard;
