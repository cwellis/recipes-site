import { useEffect } from 'react'


// components
import RecipeDetails from '../components/RecipeDetails'
import RecipeForm from '../components/RecipeForm'
import { useRecipesContext } from '../hooks/useRecipesContext'

const Home = () => {
    const {recipes, dispatch} = useRecipesContext()

    useEffect(() => {
        const fetchrecipes = async () => {
            const response = await fetch('/api/recipes')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_recipeS', payload: json})
            }
        }

        fetchrecipes()
    }, [dispatch])

    return (
       <div className="home">
        <div className="recipes">
            {recipes && recipes.map((recipe) => (
                <RecipeDetails key={recipe._id} recipe={recipe} />
            ))}
        </div>
        <RecipeForm />
       </div> 
    )
}

export default Home