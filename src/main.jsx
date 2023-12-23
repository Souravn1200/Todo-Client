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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "",
        element: <Content></Content>
      },
      {
        path: '/create',
        element: <Create></Create>
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
        element: <ContentDetails></ContentDetails>
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
