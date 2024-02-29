import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router';
import { Grid } from '@mui/material';

import Header from './Header';

import styles from './styles';
import PrimaryLoader from '../../component/PrimaryLoader/PrimaryLoader';

const MainLayout = () => {
  const navigate = useNavigate();
  const {
    data: { isAuthenticated },
  } = useLoaderData();

  useEffect(() => {
    setTimeout(() => {
      if (!isAuthenticated) navigate('/login');
    }, 3000);
  }, []);

  if (!isAuthenticated) return <PrimaryLoader size={50} />;

  const renderContent = () => {
    return (
      <Grid {...styles.contentGridProps}>
        <Outlet />
      </Grid>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      <Header />
      {renderContent()}
    </Grid>
  );
};

export default MainLayout;
