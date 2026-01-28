import { useContext } from "react";
import { GlobalContext } from "../../context";
import { FavouritesCard } from "../../components/FavouritesCard";

export function Favourite(){
    const { favouriteRecipes, removeFavourite } = useContext(GlobalContext);
    
    if (favouriteRecipes.length === 0) {
        return (
            <div className="text-center p-8">
                <h2 className="text-2xl font-bold mb-4">No Favourites Yet</h2>
                <p className="text-gray-600">Add some recipes to your favourites to see them here!</p>
            </div>
        );
    }
    
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">My Favourite Recipes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {favouriteRecipes.map(recipe => (
                    <FavouritesCard 
                        key={recipe.id} 
                        recipe={recipe} 
                        onRemove={removeFavourite}
                    />
                ))}
            </div>
        </div>
    );
}