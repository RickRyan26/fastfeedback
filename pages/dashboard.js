import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }
  return <EmptyState />; // But then this one does?
};

export default Dashboard;
