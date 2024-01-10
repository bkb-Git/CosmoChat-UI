import { Outlet } from 'react-router';
import { Grid } from '@mui/material';

const MainLayout = () => {
  return (
    <Grid xs={12} container justifyContent="center" alignItems="center">
      <Grid
        xs={12}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        Header
      </Grid>
      <Grid xs={12} justifyContent="center" alignItems="center">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default MainLayout;
