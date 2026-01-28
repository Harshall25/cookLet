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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                recipeList.map(item => (
                    <div
                        key={item.id}
                        className="bg-white border rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
                    >
                        <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover rounded-md" />
                        <h1 className="text-lg font-semibold mt-2">{item.title}</h1>
                        <button className="transform
                            transition-transform
                            duration-200
                            hover:scale-103
                            active:scale-98
                            bg-violet-500
                            text-white
                            px-4
                            py-2
                            rounded-lg" onClick={() => navigate(`/recipe-detail/${item.id}`)}>Recipe Details</button>
                    </div>
                ))
            }
        </div>
    );
}