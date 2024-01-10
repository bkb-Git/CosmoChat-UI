import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

const App = () => {
  // const LoginRoute = {
  //   path: '/',
  //   element: <AuthLayout />,
  //   // children: []
  // };

  const MainAppRoute = {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'greeting',
        index: true,
        element: <div>Hello</div>,
      },
    ],
  };

  const router = createBrowserRouter([MainAppRoute]);

  return <RouterProvider router={router} />;
};

export default App;
