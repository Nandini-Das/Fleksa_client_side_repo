import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Layout/Main';
import OrderPage from './Pages/Home/OrderPage';
import OrderedItem from './Pages/Home/OrderedItem';
import About from './Pages/Home/About';
import Services from './Pages/Home/Services';
import Menu from './Pages/Home/Menu';
import Contact from './Pages/Home/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "/about",
        element: <About></About>,
      
      },
      {
        path: "/services",
        element: <Services></Services>,
      
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        
      
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
        
      
      },
      {
        path: "/orderPage/:id",
        element:<OrderPage></OrderPage>,
        loader: (params)=> (`https://online-food-web-server.vercel.app/menu/${params.id}`),
      },
      {
        path: "/myOrder",
        element:<OrderedItem></OrderedItem>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
