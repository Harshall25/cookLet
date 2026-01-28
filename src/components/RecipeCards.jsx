import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

export function RecipeCards() {
    const { recipeList } = useContext(GlobalContext);
    const navigate = useNavigate();
    
    if (recipeList.length === 0) {
        return (
            <div className="text-center p-8">
                <h3 className="text-xl text-gray-600 mb-4">No recipes found</h3>
                <p className="text-gray-500">Try searching for a different dish or check your spelling.</p>
            </div>
        );
    }
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
            {
                recipeList.map(item => (
                    <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-96 transform hover:-translate-y-1"
                    >
                        <div className="relative overflow-hidden">
                            <img 
                                src={item.image_url} 
                                alt={item.title} 
                                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h1 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">{item.title}</h1>
                            <button 
                                className="mt-auto bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                                onClick={() => navigate(`/recipe-detail/${item.id}`)}
                            >
                                View Recipe
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}