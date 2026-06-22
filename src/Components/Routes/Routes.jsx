import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";

import CoffeeCards from "../CoffeCards/CoffeeCards";

const routes =createBrowserRouter([
  {
    path: '/',
    element: <Layouts/>,
    children:[
        {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/Categories.json'),
        children:[
          {
            path:'/',
            element:<CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('/Coffees.json'),
          },

          {
            path:'/category/:category',
            element:<CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('/Coffees.json'),
          }
        ]
      },
      
      {
        path:'/coffees',
        element:<Coffees></Coffees>,
        loader: ()=> fetch('/public/Coffees.json'),
      },

      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>,
      },

    
    ]
  }
])

export default routes;