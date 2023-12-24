import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home.jsx';
import Content from './Home/Content/Content.jsx';
import Create from './Home/Create/Create.jsx';
import Register from './Home/Register/Register.jsx';
import AuthProvider, { AuthContext } from './Providers/AuthProvider.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Login from './Home/Login/Login.jsx';
import ContentDetails from './Home/ContentDetails/ContentDetails.jsx';
import Update from './Home/Update/Update.jsx';
import ContactUs from './Home/ContactUs/ContactUs.jsx';
import AboutUs from './Home/AboutUs/AboutUs.jsx';
import Blogs from './Home/Blogs/Blogs.jsx';
import EditSaveComponent from './Home/LandingPage/LandingPage.jsx';
import LandingPage from './Home/LandingPage/LandingPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <LandingPage></LandingPage>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Content></Content></PrivateRoute>
      },
      {
        path: '/create',
        element: <PrivateRoute><Create></Create></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/todo-details/:id',
        loader: ({params}) => fetch(`http://localhost:5000/todo-details/${params.id}`),
        element: <PrivateRoute><ContentDetails></ContentDetails> </PrivateRoute>
      },
      {
        path: '/update-content/:id',
        loader: ({params}) => fetch(`http://localhost:5000/todo-details/${params.id}`),
        element: <PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/blogs',
        element:<Blogs></Blogs>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <RouterProvider router={router} />  
      </DndProvider>
    </AuthProvider>
  </React.StrictMode>,
)
