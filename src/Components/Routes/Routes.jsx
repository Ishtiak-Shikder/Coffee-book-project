import {  createHashRouter} from "react-router-dom";
import App from "../../App";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";

import CoffeeCards from "../CoffeCards/CoffeeCards";
import CoffeesDetail from "../Pages/CoffeesDetail";
import { ToastContainer } from "react-toastify";

const routes = createHashRouter([
  {
    path: '/',
    element: <Layouts/>,
    children:[
        {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('./Categories.json'),
        children:[
          {
            index: true,
            element:<CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('./Coffees.json'),
          },

          {
            path:'category/:category',
            element:<CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('./Coffees.json'),
          }
        ]
      },
      
      {
        path:'coffees',
        element:<Coffees></Coffees>,
        loader: ()=> fetch('./Coffees.json'),
      },

      {
        path:'dashboard',
        element:<DashBoard></DashBoard>,
      },

      {
        path: 'coffees/:id',
        element:<CoffeesDetail/>,
        loader: ()=> fetch('./Coffees.json')
      }

    
    ]
  }
],


);

export default routes;