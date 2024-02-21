const styles = {
  headerGridProps: {
    container: true,
    xs: 12,
    px: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height: '64px',
    sx: (theme) => ({
      bgcolor: theme.palette.Common.White['100p'],
    }),
  },
  headerSectionGridProps: {
    container: true,
    item: true,
    xs: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 0.5,
  },
  iconGridProps: {
    container: true,
    item: true,
    xs: 'auto',
  },
  iconButtonProps: {
    sx: {
      transition: (theme) => theme.transitions.create('all'),
      ':hover': { bgcolor: 'rgba(0,0,0,0.08)' },
    },
  },
  headerGridTextProps: {
    container: true,
    item: true,
    xs: 'auto',
  },
  optionsSectionGridProps: {
    container: true,
    item: true,
    xs: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 1.5,
  },
  headerTextProps: {
    color: (theme) => theme.palette.Common.Black['100p'],
    fontSize: '18px',
    textTransform: 'capitalize',
  },
  reXNameProps: {
    color: '#333',
    fontFamily: 'Urbanist, sans-serif',
    fontSize: '24px',
    fontWeight: 700,
  },
  profileGridProps: {
    position: 'relative',
    container: true,
    item: true,
    xs: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
