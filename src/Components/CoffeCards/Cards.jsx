import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({coffee}) => {
    const {name,image,category,ingredients,origin,type,description,rating,id} = coffee;
    return (
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
    <div className="card-actions ">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
  
</div>
</Link>
    );
};

export default Cards;