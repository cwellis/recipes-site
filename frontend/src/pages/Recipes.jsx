import RecipeItem from "../components/RecipeItem"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRecipes } from "../features/recipes/recipeSlice"
import { reset } from "../features/auth/authSlice"

let Recipes = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  const { user } = useSelector((state) => state.auth)
  const { recipes, isError, message } = useSelector(
    (state) => state.recipes
  )


  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getRecipes())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])




  return (
    <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>You have not set any recipes</h3>
        )}
    </section>
  )
}

export default Recipes