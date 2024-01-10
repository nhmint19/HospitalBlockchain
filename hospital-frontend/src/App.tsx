import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { WagmiConfig } from './config/WagmiConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const App: React.FC = () => {
  return (
    <WagmiProvider config={WagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
