import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../../features/recipes/recipeSlice'
import RecipeModal from '../RecipeModal/RecipeModal'
import { updateRecipe } from '../../features/recipes/recipeSlice'
import { useLocation } from 'react-router-dom'
import './RecipeItem.css'

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const [modalOpened, setModalOpened] = useState(false)

  const handleDelete = () => {
    window.confirm("Delete?") ? dispatch(deleteRecipe(recipe._id)) : console.log('')
  }

  const handleUpdate = () => {
    setModalOpened(true)
  }

  return (

    <div className='recipeContainer'>
      {window.location.pathname === '/' ? 

        <div>
          <h2>{recipe.title}</h2>
        </div>
         
        : 
      
        <div className='recipe'>
          <div>{new Date(recipe.createdAt).toLocaleString('en-US')}</div>
          <h2>Title: {recipe.title}</h2>
          <h2>Prep Time: {recipe.prepTime}</h2>
          <h2>Cook Time: {recipe.cookTime}</h2>
          <h2>Ingredients: {recipe.ingredients}</h2>
          <h2>Instructions: {recipe.instructions}</h2>


          <RecipeModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            recipe={recipe}
          />

          <div className='flexBtn'>

            <button
              className='btn'
              onClick={handleUpdate}
            >
              Update Recipe
            </button>

            <button 
              onClick={handleDelete}
              className='btn'
            >
              Delete Recipe
            </button>

          </div>

        </div>
      }
      
    </div>
  )
}

export default RecipeItem