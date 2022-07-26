import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RecipeForm from '../components/RecipeForm'
import { getRecipes } from '../features/recipes/recipeSlice'
import { reset } from '../features/auth/authSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

    dispatch(getRecipes())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])


  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Recipes Dashboard</p>
      </section>

      <RecipeForm />
    </>
  )
}

export default Dashboard