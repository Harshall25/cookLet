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
    return <div className="flex justify-center items-center min-h-screen p-4 -mt-16">
        <div
            key={recipe.id}
            className="bg-white border rounded-lg shadow-md p-6 max-w-2xl w-full"
        >
            <div className="flex gap-6">
                {/* Left side - Image and Button */}
                <div className="flex flex-col">
                    <img src={recipe.image_url} alt={recipe.title} className="w-48 h-48 object-cover rounded-md" />
                    <button className="transform
                                transition-transform
                                duration-200
                                hover:scale-103
                                active:scale-98
                                bg-violet-500
                                text-white
                                px-4
                                py-2
                                rounded-lg mt-4" onClick={() => handleFavourites(recipe)}>Add to Favourites</button>
                </div>
                
                {/* Right side - Title and Ingredients */}
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-2">{recipe.title}</h1>
                    <p className="text-sm text-gray-600 mb-4">By {recipe.publisher}</p>
                    
                    {fullRecipe && fullRecipe.ingredients && (
                        <div>
                            <h3 className="font-medium text-gray-700 mb-3">Ingredients:</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                {fullRecipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>• {typeof ingredient === 'string' ? ingredient : `${ingredient.quantity || ''} ${ingredient.unit || ''} ${ingredient.description || ''}`}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
}

