import { useParams } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { RecipeDetailsCard } from "../../components/RecipeDetailsCard";
export function Details(){
    const { recipeList } = useContext(GlobalContext);
    const {id} = useParams(); //get id from the url
    const recipe = recipeList.find(item => item.id == id);
    
    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    
    return <div>
        <RecipeDetailsCard recipe={recipe}/>
    </div>
}

