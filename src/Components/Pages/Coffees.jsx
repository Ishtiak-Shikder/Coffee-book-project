import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../CoffeCards/Cards';

const Coffees = () => {
    const data = useLoaderData()
    return (
        <>

        <h1>ALL COFFEES</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-10'>
                      {/* coffee cards.....{category} */}
                      {
                        data.map(coffee=><Cards key={coffee.id} coffee={coffee}/>)
                      }
                  </div>
        </>
    );
};

export default Coffees;