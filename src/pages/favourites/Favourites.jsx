import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import { FavouritesCard } from "../../components/FavouritesCard";

export function Favourite(){
    const { favouriteRecipes, removeFavourite } = useContext(GlobalContext);
    
    if (favouriteRecipes.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center p-12 bg-white rounded-xl shadow-lg max-w-md mx-4">
                    <div className="text-6xl mb-6">💝</div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">No Favourites Yet</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">Start exploring recipes and add some to your favourites to see them here!</p>
                    <Link to="/" className="inline-block bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Discover Recipes
                    </Link>
                </div>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Favourite Recipes</h1>
                    <p className="text-gray-600">Your personal collection of delicious recipes</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favouriteRecipes.map(recipe => (
                        <FavouritesCard 
                            key={recipe.id} 
                            recipe={recipe} 
                            onRemove={removeFavourite}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}