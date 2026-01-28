import { useContext } from "react"
import { GlobalContext } from "../../context"
import { RecipeCards } from "../../components/RecipeCards";

export function Home(){
    const {loading , Error, recipeList, hasSearched} = useContext(GlobalContext);
    
    if(Error !== null){
        return <div className="text-center p-8">
            <div className="text-red-500 text-lg">{Error}</div>
        </div>
    }
    
    if(loading) {
        return <div className="text-center p-8">
            <div className="text-lg">Loading Recipes... Please Wait</div>
        </div>
    }
    
    if(recipeList.length === 0 && hasSearched) {
        return <div className="text-center p-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">No Recipes Available</h1>
            <h2 className="text-xl text-gray-600 mb-6">Sorry, we couldn't find any recipes matching your search.</h2>
            <p className="text-gray-500 text-lg mb-8">Try searching with different keywords or check your spelling.</p>
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400">Suggestions: "pizza", "pasta", "chicken", "salad", or "dessert"</p>
        </div>
    }
    
    if(recipeList.length === 0) {
        return <div className="text-center p-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to CookLet Recipe App!</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Discover Amazing Recipes Just For You</h2>
            <p className="text-gray-500 text-lg mb-8">Search for your favorite dishes using the search bar above and explore thousands of delicious recipes.</p>
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-gray-400">Start by searching for "pizza", "pasta", "chicken" or any dish you love!</p>
        </div>
    }
    
    return <div>
        <RecipeCards />
    </div>
}
 


