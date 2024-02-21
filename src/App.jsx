import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
// import AuthenticationLayout from './layout/AuthenticationLayout';

const App = () => {
  // const AuthRoute = {
  //   path: '/login',
  //   element: <AuthenticationLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <div>login</div>,
  //     },
  //     {
  //       path: 'signup',
  //       element: <div>signup </div>,
  //     },
  //   ],
  // };

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
        element: <div>Hello</div>,
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
