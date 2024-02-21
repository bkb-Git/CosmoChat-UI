import { Grid, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import { ReactComponent as ActivityIcon } from '../../../assets/svg/Activity.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/svg/Setting.svg';
import ReXAvatar from '../../../assets/images/RexAvatar.png';

import { ROUTES } from '../../../constants/routes';

import styles from './styles';

/**
 * Header component that renders profile and options sections.
 *
 * @return {JSX.Element} The rendered component
 */
const Header = () => {
  const navigate = useNavigate();

  const handleRouteToHome = () => navigate(ROUTES.HOME);

  const renderProfile = () => {
    return (
      <Grid {...styles.headerSectionGridProps} onClick={handleRouteToHome}>
        <Grid {...styles.profileGridProps}>
          <IconButton>
            <img
              alt="profile"
              src={ReXAvatar}
              style={{ width: 28, height: 28, objectFit: 'contain' }}
            />
          </IconButton>
        </Grid>
        <Grid {...styles.headerGridTextProps}>
          <Typography {...styles.reXNameProps}>ReX</Typography>
        </Grid>
      </Grid>
    );
  };

  const renderOptions = () => {
    return (
      <Grid {...styles.optionsSectionGridProps}>
        <Grid {...styles.iconGridProps}>
          <IconButton {...styles.iconButtonProps}>
            <ActivityIcon />
          </IconButton>
        </Grid>
        <Grid {...styles.iconGridProps}>
          <IconButton {...styles.iconButtonProps}>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid {...styles.headerGridProps}>
      {renderProfile()}
      {renderOptions()}
    </Grid>
  );
};

export default Header;
