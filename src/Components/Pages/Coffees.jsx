import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../CoffeCards/Cards';
import Heading from '../Heading';

const Coffees = () => {
    const data = useLoaderData()
    const [coffees,setCoffees] = useState(data)
    const handleSort = (sortType)=>{
     if(sortType === 'popularities'){
       const sorted = [...data].sort((a,b)=> b.popularities - a.popularities )
       setCoffees(sorted)
     }
     else if(sortType === 'rating'){
     const sorted = [...data].sort((a,b)=> a.rating - b.rating)
     setCoffees(sorted)
     }
    }
    return (
        <>

        
        <div className='flex justify-between items-center'>

          <Heading title={'Sort Coffees By Popularity & Rating'}/>
          <div>
           <button onClick={()=> handleSort('popularities')} className='btn btn-warning text-black mr-8'>Sort by Popularity</button>
          <button  onClick={()=> handleSort('rating')}className='btn btn-warning text-black'>Sort by Rating</button>
          </div>
         
        </div>

        
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-10'>
                      {/* coffee cards.....{category} */}
                      {
                        coffees.map(coffee=><Cards key={coffee.id} coffee={coffee}/>)
                      }
                  </div>
        </>
    );
};

export default Coffees;