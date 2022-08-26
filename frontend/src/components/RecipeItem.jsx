import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../features/recipes/recipeSlice'
import RecipeModal from './RecipeModal/RecipeModal'

function RecipeItem({ recipe }) {
  const dispatch = useDispatch()

  const [modalOpened, setModalOpened] = useState(false)

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
        className='btn'
        onClick={() => setModalOpened(true)}
      >
        Update Recipe
      </button>

      <RecipeModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />

      <button 
        onClick={handleDelete}
        className='btn'>
        Delete Recipe
      </button>
    </div>
  )
}

export default RecipeItem