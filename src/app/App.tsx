import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppProviders from './Provider';
import AppRouter from './Router';
import SplashScreen from '../view/components/layout/splash/SplashScreen.tsx';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem('visited', 'true');
      setTimeout(() => setShowSplash(false), 2000); // 2초간 스플래쉬 보여줌
    }
  }, []);

  return (
    <BrowserRouter>
      <AppProviders>
        {showSplash ? <SplashScreen /> : <AppRouter />}
      </AppProviders>
    </BrowserRouter>
  );
};

export default App;