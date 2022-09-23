import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import RecipeItem from '../RecipeItem/RecipeItem'
import './HomeMiddle.css'

let HomeMiddle = () => {

    const { user } = useSelector((state) => state.auth)
    const { recipes, isLoading, isError, message } = useSelector(
        (state) => state.recipes
    )

    let logTitle = (e) => {
        console.log(e)
    }


    return (
        <div className="middleContainer">

            <div className='homeCard'>

                <div className='homeHeader'>
                    Home Middle
                </div>

            </div>

            <div className='recipesHome'>
                {recipes.slice(0, 3).map((recipe) => (
                        <RecipeItem
                            key={recipe._id} 
                            recipe={recipe} 
                            onClick={logTitle} 
                        />
                ))}
                
                <Link to='/recipes'>
                    View All
                </Link>

            </div>


        </div>
    )
}

export default HomeMiddle