import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));

export const routesConfig = [
  {
    path: '/',
    element: <Home />,
  },
];

const routes = createBrowserRouter(routesConfig);

export default routes;
