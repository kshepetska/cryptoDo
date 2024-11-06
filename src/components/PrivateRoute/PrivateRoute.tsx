import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../../services/authProvider';

interface PrivateRouteProps {
  children: React.ReactNode;
  redirectCondition?: boolean;
  redirectRoute?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectCondition,
  redirectRoute = '/registration',
}) => {
  const {userLoggedIn} = useAuth();

  if (!userLoggedIn || (redirectCondition && !userLoggedIn)) {
    return <Navigate to={redirectRoute} replace />;
  }

  return <>{children}</>;
};
