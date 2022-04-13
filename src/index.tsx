import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

//Styles
import { Global } from './styles/Global';
import Reset from './styles/Reset';

declare module "react-query/types/react/QueryClientProvider" {
  interface QueryClientProviderProps {
    children?: ReactNode;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Reset />
      <Global />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

