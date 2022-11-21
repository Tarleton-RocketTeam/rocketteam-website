import React from "react";
import {
  createBrowserRouter,RouterProvider 
} from "react-router-dom";

import '../assets/styles/app.scss'
import 'boxicons';
import { Analytics } from '@vercel/analytics/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from "./landing";
import LeadershipPage from './leadership'
import AboutPage from "./about";
import TeamsPage from "./teams";
import ErrorPage from "./errors";
import ContactPage from "./contact";
//  import Tracker from "../components/Tracker";
function Views() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>,
      errorElement: <ErrorPage/>,
    },
    
    {
    path: "/about",
    element:<AboutPage/>,
    },
    {
    path:'/teams',
    element:<TeamsPage/>
    
    },
    {
      path: "/contact",
      element:<ContactPage/>,
      },
    {path:"/leadership",
    element:<LeadershipPage/>
    }
      
      
   
   
    
    
    
  
  ]);
  return (
  <>
  

    <RouterProvider router={router} />
 
 <Analytics/>
        </>
    
     
   
       
           


  );
}

export default Views;