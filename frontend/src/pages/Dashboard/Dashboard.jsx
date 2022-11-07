import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RecipeForm from '../../components/RecipeForm/RecipeForm'
import { getRecipes } from '../../features/recipes/recipeSlice'
import { reset } from '../../features/auth/authSlice'
import Spinner from '../../components/Spinner/Spinner'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const { isLoading, isError, message } = useSelector((state) => state.recipes)

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

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      <section className='heading'>
        <h1>Welcome, {user && user.name}</h1>
        <p>Add A Recipe</p>
      </section>

      <RecipeForm />
    </>
  )
}

export default Dashboard