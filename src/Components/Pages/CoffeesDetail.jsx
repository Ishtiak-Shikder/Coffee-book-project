import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from '../Heading';
import { addFavorite, getAllFavorite } from '../../Utills';

const CoffeesDetail = () => {
    const {id} = useParams();
    const data = useLoaderData();
    // const [coffee,setCoffee] = useState({})
    // useEffect(()=>{
    //  const category = data.find(coffee=> coffee.id == id);
    //  setCoffee(category)
    // },[data,id])

    const coffee = data.find(
  coffee => coffee.id == id
);

const {description,image,making_process,ingredients,nutrition_info,type,popularities,rating} = coffee;

const handleFavorite = (coffee)=>{
    addFavorite(coffee)
}
    
    return (
        <div>
          <h1 className='text-4xl font-thin '>{description}</h1>
           <img className='h-150 w-full rounded-xl my-6' src={image} alt="" />

          <div className='flex justify-between items-center'>
            <div>
            <h1 className='text-4xl font-thin'>{type}</h1>
            <p>Popularity : {popularities}</p>
            <p>Rating : {rating}</p>
            </div>
           <div>
            <button onClick={()=> handleFavorite(coffee)} className='btn btn-warning text-black'>Add To Favorite</button>
           </div>
          </div>

            <div className='my-10'>
           <h1 className='font-thin text-2xl'>Making-Process : </h1>
            <ul className=' list-decimal px-9'>
                {
                    making_process.map((making)=><li className='font-semibold'>{making},</li>)
                }
            </ul>

            </div>
       

       <div className='my-10'>
        <h1 className='font-thin text-2xl'>Ingredients : </h1>
            <ul className='my-5 list-decimal px-9'>
                {
                    ingredients.map((ingredient)=><li className='font-semibold'>{ingredient}</li>)
                }
            </ul>
       </div>
           

           <div className='my-10'> 
           <h1 className='font-thin text-2xl'>Nutrition : </h1>
            <ul className='my-5 list-decimal px-9 font-semibold'>
               <li>Calories :{nutrition_info.calories}</li>
               <li>Fat :{nutrition_info.fat}</li>
               <li>Carbohydrates :{nutrition_info.carbohydrates}</li>
               <li>Protein{nutrition_info.protein}</li>
            </ul>
           
           </div>
          
        </div>
    );
};

export default CoffeesDetail;