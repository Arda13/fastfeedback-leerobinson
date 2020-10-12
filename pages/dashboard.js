import Head from 'next/head';
import useSWR from 'swr';
import { Button, Heading, Text, Code, Icon, Box, Flex } from '@chakra-ui/core';
import EmptyState from '@/components/EmptyState';
import fetcher from '@/utils/fetcher';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import DashboardShell from '@/components/DashboardShell';
import { useAuth } from '@/lib/auth';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton></SiteTableSkeleton>
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.site ? <SiteTable sites={data.sites} /> : <EmptyState></EmptyState>}
    </DashboardShell>
  );
};

export default Dashboard;

