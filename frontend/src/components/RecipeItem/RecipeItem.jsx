import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRecipe } from '../../features/recipes/recipeSlice'
import { likeRecipe } from '../../features/recipes/recipeSlice'
import RecipeModal from '../RecipeModal/RecipeModal'
import { updateRecipe } from '../../features/recipes/recipeSlice'
import { useLocation } from 'react-router-dom'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './RecipeItem.css'
import RecipePreview from '../RecipePreview/RecipePreview'

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  const { user } = useSelector((state) => state.auth)

  const [modalOpened, setModalOpened] = useState(false)
  const [previewOpened, setPreviewOpened] = useState(false)

  const handleDelete = () => {
    window.confirm("Delete?") ? dispatch(deleteRecipe(recipe._id)) : console.log('')
  }

  const handleLike = () => {
    dispatch(likeRecipe(recipe.likes))
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
              <img
                onClick={recipeOpened}
                className='imgClick'
                src={recipe.image} 
                alt="" 
                srcset="" 
              />
            </div>


            <div className='flexBtn'>

              <button
                className={ recipe.user.toString() !== user._id ? `hidden` : `btn` }
                onClick={handleUpdate}
              >
                Update
              </button>

              <button 
                onClick={handleDelete}
                className={ recipe.user.toString() !== user._id ? `hidden` : `btn` }
              >
                Delete
              </button>

            </div>

            <div className='flexBtn'>
              <button 
                className='btn'
                onClick={handleLike}
              >
                {recipe.likes?.includes(user._id) 
                ? 
                <AiFillHeart /> 
                : 
                <AiOutlineHeart />}
              </button>
              <div>
                {recipe.likes}
              </div>
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

// test