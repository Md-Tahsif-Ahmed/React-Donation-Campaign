import React from 'react'
import ReactDOM from 'react-dom/client'
 import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import HomePage from './components/HomePage/HomePage';
import Donation from './components/Donation/Donation';
import AllCampaign from './components/AllCampaign/AllCampaign';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
        loader: ()=> fetch('../donation.json'),
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
      },
      // {
      //   path: '/',
      //   element: <AllCampaign></AllCampaign>,
        
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
