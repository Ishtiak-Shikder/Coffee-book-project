import { toast } from "react-toastify";

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
    if(isExist) return toast('this data already exists')
    favorite.push(coffee);
    localStorage.setItem('favorites',JSON.stringify(favorite));
}

export{addFavorite,getAllFavorite}