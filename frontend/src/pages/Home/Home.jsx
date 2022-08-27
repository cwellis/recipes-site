import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../../features/recipes/recipeSlice'
import { reset } from '../../features/auth/authSlice'
import ProfileSide from "../../components/ProfileSide/ProfileSide"

const Home = () => {

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
        <div className="home">
            <ProfileSide />
        </div>
    )
}

export default Home