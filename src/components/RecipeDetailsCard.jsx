import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

export function RecipeDetailsCard({ recipe }) {
    const [fullRecipe, setFullRecipe] = useState(null);
    const navigate = useNavigate();
    const {handleFavourites} = useContext(GlobalContext);
    
    useEffect(() => {
        async function fetchFullRecipe() {
            try {
                const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${recipe.id}`);
                const result = await response.json();
                setFullRecipe(result.data.recipe);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        }
        fetchFullRecipe();
    }, [recipe.id]);
    return <div className="flex justify-center items-start min-h-screen p-3 md:p-4 pt-4">
        <div
            key={recipe.id}
            className="bg-white border rounded-lg shadow-md p-4 md:p-6 max-w-4xl w-full"
        >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Image and Button */}
                <div className="flex flex-col items-center md:items-start flex-shrink-0">
                    <img src={recipe.image_url} alt={recipe.title} className="w-full max-w-sm md:w-48 md:h-48 h-64 object-cover rounded-md" />
                    <button className="w-full md:w-auto mt-4 transform
                                transition-transform
                                duration-200
                                hover:scale-103
                                active:scale-98
                                bg-violet-500
                                text-white
                                px-4
                                py-2
                                rounded-lg
                                text-sm md:text-base" onClick={() => handleFavourites(recipe)}>Add to Favourites</button>
                </div>
                
                {/* Title and Ingredients */}
                <div className="flex-1 min-w-0">
                    <h1 className="text-xl md:text-2xl font-semibold mb-2 break-words">{recipe.title}</h1>
                    <p className="text-sm text-gray-600 mb-4">By {recipe.publisher}</p>
                    
                    {fullRecipe && fullRecipe.ingredients && (
                        <div>
                            <h3 className="font-medium text-gray-700 mb-3 text-base md:text-lg">Ingredients:</h3>
                            <ul className="text-sm md:text-base text-gray-600 space-y-1 md:space-y-2 max-h-64 md:max-h-96 overflow-y-auto">
                                {fullRecipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="break-words">• {typeof ingredient === 'string' ? ingredient : `${ingredient.quantity || ''} ${ingredient.unit || ''} ${ingredient.description || ''}`}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
}

