import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";


const Cards = ({coffee,handleRemove}) => {
    const {name,image,category,ingredients,origin,type,popularities,rating,id} = coffee;
     const {pathname} = useLocation();
    return (
      <div className='flex relative'>
         <Link to={`/coffees/${id}`} className='transition hover:scale-105 shadow-xl overflow-hidden'>
        <div className="card bg-base-100 w-100 h-125 shadow-sm">
           
  <figure>
    <img
      src={image}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name : {name}</h2>
    <p>Category : {category}</p>
    <p>Type : {type}</p>
    <p>Origin : {origin}</p>
    <p>Rating : {rating}</p>
    <p>Popularities : {popularities}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>

</div>
</Link>
{
    pathname === '/dashboard' && <div onClick={()=>handleRemove(id)} className='absolute -top-5 -right-5 p-3 bg-warning rounded-full cursor-pointer'><FaTrashAlt/></div>
  }
</div>
    );
};

export default Cards;