import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router';
import { CircularProgress, Grid } from '@mui/material';

import Header from './Header';

import styles from './styles';

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

  if (!isAuthenticated)
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
        xs={12}
      >
        <CircularProgress size={50} />
      </Grid>
    );

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
