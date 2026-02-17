import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><AboutPage /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><ProjectsPage /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><ContactPage /></Layout>,
  },
  {
    path: '*',
    element: <Layout><NotFoundPage /></Layout>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}