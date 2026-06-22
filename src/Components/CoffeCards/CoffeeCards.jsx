import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from './Cards';
import { useEffect, useState } from 'react';

const CoffeeCards = () => {
    const navigate = useNavigate()
    const {category} = useParams();
    const data = useLoaderData();
    const [coffees,setCoffees] = useState([]);
    console.log(data)
    useEffect(()=>{
       if(category){
         const filterByData = [...data].filter(coffee=> coffee.category === category);
        setCoffees(filterByData)
       }
       else{
        setCoffees(data.slice(0,9))
       }
    },
    [category,data])
   
    return (
        <>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-10'>
            {/* coffee cards.....{category} */}
            {
                coffees.map(coffee=><Cards key={coffee.id} coffee={coffee}/>)
            }
        </div>
        {/* <button className='btn btn-warning' onClick={()=>navigate('/coffees') } >View All</button> */}
        <button className='btn btn-warning' onClick={()=> setCoffees(data) } >View All</button>
        
        </>
    );
};

export default CoffeeCards;