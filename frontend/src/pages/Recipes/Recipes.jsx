import RecipeItem from "../../components/RecipeItem/RecipeItem"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getRecipes } from "../../features/recipes/recipeSlice"
import { reset } from "../../features/auth/authSlice"
import Spinner from "../../components/Spinner/Spinner"
import { useState } from "react"
import './Recipes.css'

let Recipes = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  
  const { user } = useSelector((state) => state.auth)
  const { recipes, isLoading, isError, message } = useSelector(
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
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <section className='content'>

      <h1>My Recipes</h1>

      <input
        className="searchBar"
        type="text" 
        placeholder="Search"
        onChange={e => {setSearchTerm(e.target.value)}}
      />

        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.filter((recipe) => {
              if (searchTerm === '') {
                return recipe
              } else if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return recipe
              }
            }).map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="content">
            <h3>You have not set any recipes</h3>
          </div>
        )}
    </section>
  )
}

export default Recipes