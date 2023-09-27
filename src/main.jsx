import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Corrected import paths
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomePage';
import Donation from './components/Donation/Donation';
import EducationDetails from './components/EducationDetails/EducationDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: () => fetch('../donation.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('../donation.json'),
      },
      {
        path: '/education-details',
        element: <EducationDetails></EducationDetails>,
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
