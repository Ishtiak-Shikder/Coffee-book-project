import { Link ,NavLink} from 'react-router-dom';


const Categories = ({categories}) => {

    return (

<div className="tabs tabs-box justify-evenly">

{
    categories.map(category=> <NavLink  key={category.id} to={`/category/${category.name}`} type="radio" name="my_tabs_1" className="tab text-2xl font-thin" aria-label={category}> {category.name}</NavLink>)
}

</div>
    );
};

export default Categories;