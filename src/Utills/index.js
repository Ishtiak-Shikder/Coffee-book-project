import toast from "react-hot-toast";

const getAllFavorite = ()=>{
    const all = localStorage.getItem('favorites');
    if(all){
        const favorite = JSON.parse(all);
        return favorite;
    }
    else{
        return [];
    }
}

const addFavorite = (coffee)=>{

    const favorite = getAllFavorite();
    const isExist = favorite.find(item => item.id === coffee.id)
    if(isExist) 
        return toast.error('coffees data already exist!');

    favorite.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorite));
    toast.success('successfully added')
}

const removeFavorite = (id)=>{
    const favorite = getAllFavorite();
    const remaining  = favorite.filter(coffee=> coffee.id != id)
    localStorage.setItem('favorites',JSON.stringify(remaining))
    toast.success('successFully Removed')
}

export{addFavorite,getAllFavorite,removeFavorite}