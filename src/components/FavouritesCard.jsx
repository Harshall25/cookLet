import { useNavigate } from "react-router-dom";

export function FavouritesCard({ recipe, onRemove }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white border rounded-lg shadow-md p-4">
            <img src={recipe.image_url} alt={recipe.title} className="w-full h-48 object-cover rounded-md" />
            <h1 className="text-lg font-semibold mt-2">{recipe.title}</h1>
            <p className="text-sm text-gray-600">{recipe.publisher}</p>
            <div className="flex gap-2 mt-3">
                <button 
                    className="transform
                            transition-transform
                            duration-200
                            hover:scale-102
                            active:scale-99
                            bg-violet-500
                            text-white
                            px-4
                            py-2
                            rounded-lg flex-1"
                    onClick={() => navigate(`/recipe-detail/${recipe.id}`)}
                >
                    Recipe Details
                </button>
                <button 
                    className="transform
                            transition-transform
                            duration-200
                            hover:scale-103
                            active:scale-98
                            bg-red-500
                            text-white
                            px-4
                            py-2
                            rounded-lg flex-1"
                    onClick={() => onRemove(recipe.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
}