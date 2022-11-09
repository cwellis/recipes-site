import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getRecipes } from '../../features/recipes/recipeSlice'
import { reset } from '../../features/auth/authSlice'
import ProfileSide from "../../components/ProfileSide/ProfileSide"
import HomeMiddle from '../../components/HomeMiddle/HomeMiddle'
import HomeRightSide from '../../components/HomeRightSide/HomeRightSide'
import './Home.css'
import HomeScreen from '../../components/HomeScreen/HomeScreen'

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

          {/* <div className='homeCard'>
            <ProfileSide />
          </div>

          <div className='homeCard'>
            <HomeMiddle />
          </div> */}

          <HomeScreen />

        </div>
    )
}

export default Home