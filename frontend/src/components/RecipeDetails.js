import { useRecipesContext } from "../hooks/useRecipesContext"

// date fns

const RecipeDetails = ({ recipe }) => {

    const { dispatch } = useRecipesContext()

    const handleClick = async () => {
      const response = await fetch(`/api/recipes/${recipe._id}`, {
        method: 'DELETE'
      })

      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'DELETE_RECIPE', payload: json})
      }
    }

    const checkClick = async () => {
      const checked = window.confirm('Would you like to delete?')

      if (checked) {
        handleClick()
      }
    }

    return (
        <div className="recipe-details">
            <h4>{recipe.title}</h4>
            <p><strong>Load (lb)</strong>{recipe.load}</p>
            <p><strong>Reps</strong>{recipe.reps}</p>
            <span className='material-symbols-outlined' onClick={checkClick}>delete</span>
        </div>
    )
}

export default RecipeDetails