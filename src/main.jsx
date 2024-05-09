import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Route/Root';
import Err from './Components/Err';
import Home from './Pages/Home';
import AddCard from './Pages/AddCard';
import Mycard from './Pages/Mycard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Err></Err>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addcard',
        element: <AddCard></AddCard>
      },
      {
        path:'/mycard',
        element: <Mycard></Mycard>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
