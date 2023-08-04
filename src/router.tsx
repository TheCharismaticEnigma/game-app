import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import GameDetailPage from './pages/GameDetailPage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // Children component(s) are rendered inside the Outlet component of a parent.
      { index: true, element: <HomePage /> },
      { path: 'games/:slug', element: <GameDetailPage /> },
    ],
  },
]);

export default router;

// USE ".tsx" as we're referencing REACT COMPONENTS.
// If TS files, then use .ts extension
