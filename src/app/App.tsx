import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppProviders from './Provider';
import AppRouter from './Router';
import { persistor } from './store';
import SplashScreen from '../view/layout/splash/SplashScreen.tsx';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem('visited');
    if (visited) {
      setShowSplash(false);
    } else {
      sessionStorage.setItem('visited', 'true');
      setTimeout(() => setShowSplash(false), 2000);
    }
  }, []);

  return (
    <BrowserRouter>
      <AppProviders>
        <PersistGate loading={null} persistor={persistor}>
          {showSplash ? <SplashScreen /> : <AppRouter />}
        </PersistGate>
      </AppProviders>
    </BrowserRouter>
  );
};

export default App;