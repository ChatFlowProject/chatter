import { Navigate } from 'react-router-dom';
import { useAuth }  from '../context/useAuth';
import SplashScreen from '../../../../view/layout/splash/SplashScreen.tsx';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <SplashScreen  />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;