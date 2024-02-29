import { CircularProgress, Grid } from '@mui/material';

import styles from './styles';

/**
 * PrimaryLoader component function
 *
 * @param {Object} props - object containing size and extraProps
 *  @param {Object} props.size - Defines the size of the circular loader.
 *  @param {Object} props.extraProps - Extra props to be passed to the component.
 *
 * @return {JSX.Element} JSX element representing the PrimaryLoader component
 */
const PrimaryLoader = (props) => {
  const { size, extraProps } = props;

  return (
    <Grid {...styles.loaderGridProps(extraProps)}>
      <CircularProgress size={size || 30} />
    </Grid>
  );
};

export default PrimaryLoader;
