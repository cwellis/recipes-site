import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipes/recipeSlice'

function RecipeItem({ recipe }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    window.confirm("Delete?") ? dispatch(deleteRecipe(recipe._id)) : console.log('')
  }

  return (
    <div className='recipe'>
      <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
      <h2>Title: {recipe.title}</h2>
      <h2>Prep Time: {recipe.prepTime}</h2>
      <h2>Cook Time: {recipe.cookTime}</h2>
      <h2>Ingredients: {recipe.ingredients}</h2>
      <h2>Instructions: {recipe.instructions}</h2>

      <button 

        onClick={handleDelete}
        className='close'>
        Delete Recipe
      </button>
    </div>
  )
}

export default RecipeItem