
import {useState, useEffect} from "react"; 
import { FETCH_MENU_URL_BEGIN, FETCH_MENU_URL_END } from "../config";

const useRestaurantsMenu = (resId) =>{

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        getRestaurantMenu();
    },[])

    async function getRestaurantMenu(){
        const link = FETCH_MENU_URL_BEGIN+resId+FETCH_MENU_URL_END;
        const data = await fetch(link);
        const json = await data.json();

        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards); 

    }
    
    return [restaurant, menu];

}

export default useRestaurantsMenu;