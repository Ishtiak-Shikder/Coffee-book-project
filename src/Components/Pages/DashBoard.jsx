import React, { useEffect, useState } from 'react';
import Heading from '../Heading';
import { getAllFavorite, removeFavorite } from '../../Utills';
import Cards from '../CoffeCards/Cards';
import { useLocation } from 'react-router-dom';

const DashBoard = () => {
    const [coffees,setCoffee]= useState([]);
    useEffect(()=>{
        const favorite = getAllFavorite();
        setCoffee(favorite)
    }
    ,[]);

    const handleRemove = (id)=>{
        removeFavorite(id);
        const favorite = getAllFavorite();
        setCoffee(favorite)
    }

    return (
        <div>
           <Heading title="Welcome To Dashboard" subTitle="Manage Coffees That You have Previously added on favorite. You Can View Or Remove Them Here."/>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
           {
            
            coffees.map(coffee => <Cards key={coffee.id} handleRemove={handleRemove} coffee={coffee}/>)

           }
           </div>

        </div>
    );
};

export default DashBoard;