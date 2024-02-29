import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Welcome from './pages/Welcome';

const App = () => {
  const MainAppRoute = {
    path: '/',
    element: <MainLayout />,
    loader: () => ({
      data: { isAuthenticated: true },
      error: null,
      loading: true,
    }),
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'chat',
        element: <div>Chat</div>,
      },
    ],
  };

  const router = createBrowserRouter([MainAppRoute]);

  return <RouterProvider router={router} />;
};

export default App;
