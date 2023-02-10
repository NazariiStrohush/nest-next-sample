import React from 'react';
import GlobalStyles from '../../components/GlobalStyles';

const WithGlobalStyles = (Component: React.ComponentType) => {
  const WrappedComponent = (props: any) => {
    return (
      <>
        <GlobalStyles />
        <Component {...props} />
      </>
    );
  };

  return WrappedComponent;
};

export default WithGlobalStyles;
