import { useEffect, useState } from 'react';

const withClientSideRender = (Component: React.ComponentType) => {
  const WrappedComponent = (props: any) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    return <>{mounted ? <Component {...props} /> : null}</>;
  };

  return WrappedComponent;
};

export default withClientSideRender;
