import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SocketProvider } from '@service/feature/chat';
import { Toaster } from 'sonner';
import { SSEProvider } from '@service/feature/chat/context/SSEProvider';
// import { SSEProvider } from '@service/feature/chat/context/SSEProvider';

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <SocketProvider>
          <SSEProvider>
            {children}
            <Toaster />
          </SSEProvider>
        </SocketProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppProviders;
