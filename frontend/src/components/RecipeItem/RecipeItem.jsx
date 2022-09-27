import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecipe } from '../../features/recipes/recipeSlice'
import RecipeModal from '../RecipeModal/RecipeModal'
import { updateRecipe } from '../../features/recipes/recipeSlice'
import { useLocation } from 'react-router-dom'
import './RecipeItem.css'
import RecipePreview from '../RecipePreview/RecipePreview'

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const [modalOpened, setModalOpened] = useState(false)
  const [previewOpened, setPreviewOpened] = useState(false)

  const handleDelete = () => {
    window.confirm("Delete?") ? dispatch(deleteRecipe(recipe._id)) : console.log('')
  }

  const handleUpdate = () => {
    setModalOpened(true)
  }

  const recipeOpened = () => {
    setPreviewOpened(true)
  }

  return (

    <div className='recipeContainer'>
      {window.location.pathname === '/' ? 

        <div>

            <div onClick={recipeOpened}>
              <h2 className='recipeTitle'>{recipe.title}</h2>
            </div>

            <div>
              <img 
                className='imgHome' 
                src={recipe.image}
                onClick={recipeOpened}
              />
            </div>

            <RecipePreview
              previewOpened={previewOpened}
              setPreviewOpened={setPreviewOpened}
              recipe={recipe}
            />

        </div>

         
        : 
      
        <div className='recipe'>

          <div>


            <div>
              {new Date(recipe.createdAt).toLocaleString('en-US')}
            </div>

            <span onClick={recipeOpened} className='recipeTitle title'>
              {recipe.title}
            </span>

            <div>
              <img src={recipe.image} alt="" srcset="" />
            </div>


            <div className='flexBtn'>

              <button
                className='btn'
                onClick={handleUpdate}
              >
                Update
              </button>

              <button 
                onClick={handleDelete}
                className='btn'
              >
                Delete
              </button>

            </div>

          </div>





          <RecipeModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            recipe={recipe}
          />

            <RecipePreview
              previewOpened={previewOpened}
              setPreviewOpened={setPreviewOpened}
              recipe={recipe}
            />

        </div>
      }
      
    </div>
  )
}

export default RecipeItem