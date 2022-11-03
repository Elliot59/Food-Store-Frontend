import React from 'react';
import Header from './header/Header';
import Body from './body/Body'
import Footer from './footer/Footer'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from './body/Cart';

  const ProductWrapper = () =>{
    return(
        <div>
            <Header />
            <Body/>
            <Footer />
        </div>
    )
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductWrapper/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    }
  ]);


  

const MainComponents = () => {
    return(
        <div>
            <RouterProvider router={router} />
        </div>
    )
}



export default MainComponents