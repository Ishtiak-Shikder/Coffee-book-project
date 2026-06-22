import React from 'react';
import Banner from '../Banner/Banner';
import Heading from '../Heading';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import CoffeeCards from '../CoffeCards/CoffeeCards';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='mx-auto'>
          <Banner></Banner>
          <Heading title={'Browse Coffees By Category'} subTitle={'Choose Your Desired Coffee  Category To Browse Through Specific Coffees That Fit In Your Test'}/>
          <Categories categories={data}/>
          <Outlet/>
        </div>
    );
};

export default Home;