import { useNavigate } from "react-router-dom";

export function FavouritesCard({ recipe, onRemove }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-96 transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
                <img 
                    src={recipe.image_url} 
                    alt={recipe.title} 
                    className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2 leading-tight">{recipe.title}</h1>
                <p className="text-sm text-gray-500 mb-3 truncate">By {recipe.publisher}</p>
                <div className="flex gap-2 mt-auto">
                    <button 
                        className="flex-1 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm shadow-md hover:shadow-lg"
                        onClick={() => navigate(`/recipe-detail/${recipe.id}`)}
                    >
                        View
                    </button>
                    <button 
                        className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2.5 px-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] text-sm shadow-md hover:shadow-lg"
                        onClick={() => onRemove(recipe.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}