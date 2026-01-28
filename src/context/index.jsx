import { createContext, useState, useEffect } from 'react';


export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
    const [searchParam, setSearchParam] = useState('');
    const [loading, SetLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [Error, setError] = useState(null);
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            SetLoading(true);
            const response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`);
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const result = await response.json();

            console.log(result);
            setRecipeList(result.data.recipes);
            SetLoading(false);
            setError(null);
        } catch (e){
            setError(e.message);
            SetLoading(false);
        }

    }

    
    
    function handleFavourites(recipe){
        console.log(recipe.ingredients);
        const isAlreadyFavourite = favouriteRecipes.some(item => item.id === recipe.id);
        if (!isAlreadyFavourite) {
            setFavouriteRecipes(prev => [...prev, recipe]);
        }
    }

    function removeFavourite(id) {
        setFavouriteRecipes(prev => prev.filter(recipe => recipe.id !== id));
    }

    useEffect(() => {
        console.log('Favourites updated:', favouriteRecipes);
    
    }, [favouriteRecipes]);

    return (<GlobalContext.Provider value={{ searchParam, setSearchParam, handleSubmit, recipeList, setRecipeList, loading, Error, favouriteRecipes, setFavouriteRecipes, handleFavourites, removeFavourite}} >
        {children}
    </GlobalContext.Provider>
    );
}

