import React from 'react';

const WithGlobalStyles = (Component: React.ComponentType) => {
  const WrappedComponent = (props: any) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };

  return WrappedComponent;
};

export default WithGlobalStyles;
