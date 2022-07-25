import { useEffect } from 'react'


// components
import RecipeDetails from '../components/RecipeDetails'
import RecipeForm from '../components/RecipeForm'
import { useRecipesContext } from '../hooks/useRecipesContext'

const AddRecipe = () => {
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
        <div className="home">
         <RecipeForm />
        </div> 
     )
}

export default AddRecipe