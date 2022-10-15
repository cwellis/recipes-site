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

            <h1 className='homeHeader'>
                Recent Recipes
            </h1>

            <div className='recipesHome'>
                {recipes.slice(0, 3).map((recipe) => (
                        <RecipeItem
                            key={recipe._id} 
                            recipe={recipe} 
                            onClick={logTitle} 
                        />
                ))}
                
                <div className='viewAll'>
                    <Link 
                        to='/recipes'
                    >
                        View All
                    </Link>
                </div>

            </div>


        </div>
    )
}

export default HomeMiddle