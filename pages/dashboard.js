import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  console.log(2); // This does execute.
  if (!auth.user) {
    console.log(3); // This does execute.
    return 'Loading...';
  }
  console.log(1); //this doesn't as expected.
  return <EmptyState />; // But then this one does?
};

export default Dashboard;
