import React from 'react'
import { useSelector } from 'react-redux'
import './HomeScreen.css'
import RecipeForm from '../RecipeForm/RecipeForm'
import RecipeItem from '../RecipeItem/RecipeItem'
import { Link } from 'react-router-dom'



const HomeScreen = () => {

    const { user } = useSelector((state) => state.auth)

    const { recipes, isLoading, isError, message } = useSelector(
        (state) => state.recipes
    )

    let logTitle = (e) => {
        console.log(e)
    }

    return (
        <div className='home-wrapper'>

            <div className='h-left'>
                <h1>Welcome, {user ? user.name : null}</h1>

                <div className='recipes-home'>
                {recipes.slice(0, 3).map((recipe) => (
                        <RecipeItem
                            key={recipe._id} 
                            recipe={recipe} 
                            onClick={logTitle} 
                        />
                ))}
                

            </div>

                <div className='viewAll'>
                    <Link 
                        to='/recipes'
                    >
                        View All
                    </Link>
                </div>

            </div>

            <div className='h-right'>
                <h1>Add Recipe</h1>
                <RecipeForm />
            </div>

        </div>
    )
}

export default HomeScreen