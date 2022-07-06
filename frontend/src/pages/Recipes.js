import { useEffect } from 'react'

import RecipeDetails from '../components/RecipeDetails'
import { useRecipesContext } from '../hooks/useRecipesContext'

let Recipes = () => {

        const {recipes, dispatch} = useRecipesContext()
    
        useEffect(() => {
            const fetchrecipes = async () => {
                const response = await fetch('/api/recipes')
                const json = await response.json()
    
                if (response.ok) {
                    dispatch({type: 'SET_RECIPES', payload: json})
                }
            }
    
            fetchrecipes()
        }, [dispatch])

return (

    <div className="recipes">
        {recipes && recipes.map((recipe) => (
            <RecipeDetails key={recipe._id} recipe={recipe} />
        ))}
    </div>

    )
}

export default Recipes