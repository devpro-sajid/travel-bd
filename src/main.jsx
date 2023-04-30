import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import HotelList from './Components/HotelList';
import PrivateRoute from './Components/PrivateRoute';
import HotelForm from './Components/HotelForm';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {path:'/',element:<Home></Home>},
      {path:'/login',element:<Login></Login>},
      {path:'/register',element:<Register></Register>},
      {path:'/hotel-list/:id',element:<PrivateRoute><HotelList></HotelList></PrivateRoute>},
      {path:'/hotel-form/:id',element:<HotelForm></HotelForm>},
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
