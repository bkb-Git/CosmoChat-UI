import { Grid } from '@mui/material';

import { ReactComponent as ProfileBg } from '../../assets/svg/ProfileBg.svg';

import styles from './styles';

const Welcome = () => {
  return (
    <Grid {...styles.mainGridProps}>
      <Grid container item xs={12}>
        <ProfileBg />
      </Grid>
    </Grid>
  );
};

export default Welcome;
