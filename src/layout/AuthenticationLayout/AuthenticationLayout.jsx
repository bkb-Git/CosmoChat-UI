import { Grid } from '@mui/material';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
  return (
    <Grid xs={12} container justifyContent="center" alignItems="center">
      <Grid
        xs={12}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        Auth Header
      </Grid>
      <Grid xs={12} justifyContent="center" alignItems="center">
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default AuthenticationLayout;
