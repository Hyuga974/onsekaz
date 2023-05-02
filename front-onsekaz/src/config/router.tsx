import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage';
import MapPage from '../pages/MapPage';

export const router = createBrowserRouter([
  {
    path: '/',
      element: <HomePage />,
  },
  {
    path: '/annonce/:id',
      element: <DetailsPage />
  },
  {
    path: '/map',
    element: <MapPage />
  }
]);
