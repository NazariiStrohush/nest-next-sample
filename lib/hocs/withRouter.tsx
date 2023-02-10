import { BrowserRouter } from 'react-router-dom';

const withRouter = (Component: React.ComponentType | React.FC) => {
  return (props: any) => {
    return (
      <BrowserRouter>
        <Component {...props} />
      </BrowserRouter>
    );
  };
};

export default withRouter;
