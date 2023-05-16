import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import DetailsPage from '../pages/DetailsPage';
import MapPage from '../pages/MapPage';
import AuthPage from '../pages/AuthPage';
import SearchAdsPage from '../pages/SearchAds';
import ReservationsPage from '../pages/ReservationsPage';
import ReviewsPage from '../pages/ReviewsPage';

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
  },
  {
    path: '/connect',
    element: <AuthPage />
  },
  {
    path: '/annonces',
    element: <SearchAdsPage />
  },
  {
    path: '/my-reservations',
    element: <ReservationsPage />
  },
  {
    path: '/my-reviews',
    element: <ReviewsPage />
  },
]);
