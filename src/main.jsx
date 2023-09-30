import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import './index.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomePage';
import Donation from './components/Donation/Donation';
import Details from './components/Details/Details';
import Statistics from './components/Statistics/Statistics';

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
        path: '/statistics',
        element:  <Statistics></Statistics>,
        loader: () => fetch('../donation.json'),
        
      },
      {
        path: '/campaign/:id',
        element: <Details></Details>,
        loader: () => fetch('../donation.json'),
      },
      // {
      //   path: '/campaign/:id',
      //   // loader: ({ params }) => fetch(`donation.json/compaign/${params.campaignId}`),
      //   loader: ({params}) =>  fetch(`donation.json/${params.id}`),
      //   element: <Details></Details>,
      // },
   

 


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
