import { useContext } from "react"
import { GlobalContext } from "../../context"
import { RecipeCards } from "../../components/RecipeCards";

export function Home(){
    const {loading , Error, recipeList, hasSearched} = useContext(GlobalContext);
    
    if(Error !== null){
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
                <div className="text-red-500 text-xl font-semibold">{Error}</div>
            </div>
        </div>
    }
    
    if(loading) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
                <div className="text-xl font-semibold text-gray-800">Loading Recipes...</div>
                <p className="text-gray-600 mt-2">Please wait while we fetch delicious recipes for you</p>
            </div>
        </div>
    }
    
    if(recipeList.length === 0 && hasSearched) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-12 bg-white rounded-xl shadow-lg max-w-lg mx-4">
                <div className="text-6xl mb-6">🔍</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">No Recipes Found</h1>
                <h2 className="text-xl text-gray-600 mb-6">We couldn't find any recipes matching your search</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">Try searching with different keywords or check your spelling</p>
                <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600 font-semibold mb-2">Popular searches:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {['pizza', 'pasta', 'chicken', 'salad', 'dessert'].map(term => (
                            <span key={term} className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm">{term}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    }
    
    if(recipeList.length === 0) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center p-12 bg-white rounded-xl shadow-lg max-w-2xl mx-4">
                <div className="text-7xl mb-6">🍽️</div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Welcome to CookLet!</h1>
                <h2 className="text-2xl text-gray-600 mb-6">Discover Amazing Recipes Just For You</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl mx-auto">Search for your favorite dishes using the search bar above and explore thousands of delicious recipes from around the world</p>
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                    <p className="text-gray-700 font-semibold mb-3">✨ Get started with popular searches:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['🍕 Pizza', '🍝 Pasta', '🍗 Chicken', '🥗 Salad', '🧁 Dessert'].map(term => (
                            <span key={term} className="bg-white text-gray-700 px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">{term}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    }
    
    return <div className="min-h-screen bg-gray-50">
        <RecipeCards />
    </div>
}
 


