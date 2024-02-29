const styles = {
  loaderGridProps: (extraProps) => ({
    container: true,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    xs: 12,
    sx: {
      ...extraProps,
    },
  }),
};

export default styles;
