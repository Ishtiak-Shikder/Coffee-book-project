import {  createHashRouter} from "react-router-dom";
import App from "../../App";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";

import CoffeeCards from "../CoffeCards/CoffeeCards";

const routes = createHashRouter([
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
            index: true,
            element:<CoffeeCards></CoffeeCards>,
            loader: ()=> fetch('/Categories.json'),
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
        loader: ()=> fetch('/Coffees.json'),
      },

      {
        path:'/dashboard',
        element:<DashBoard></DashBoard>,
      },

    
    ]
  }
])

export default routes;