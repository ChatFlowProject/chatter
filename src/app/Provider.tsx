import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from '../service/feature/auth';
// import { SocketProvider } from '../service/feature/chat';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {/*<SocketProvider>*/}
            {children}
            <Toaster />
          {/*</SocketProvider>*/}
        </AuthProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppProviders;