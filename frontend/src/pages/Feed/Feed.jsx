import RecipeItem from "../../components/RecipeItem/RecipeItem"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getFeed } from "../../features/recipes/recipeSlice"
import { reset } from "../../features/auth/authSlice"
import Spinner from "../../components/Spinner/Spinner"
import { useState } from "react"
import './Feed.css'

const Feed = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { recipes, isLoading, isError, message } = useSelector((state) => state.recipes)

    const [searchTerm, setSearchTerm] = useState('')


    useEffect(() => {

        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getFeed())

        return () => {
            dispatch(reset())
        }
    }, [user, navigate, dispatch])

    return (
        <section className='content'>

            <h1 className="feed">
                Recipes Feed
            </h1>

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
                } else if (recipe.title.toLowerCase().includes(searchTerm.toLowerCase ())) {
                    return recipe
                }
                }).map((recipe) => (
                <RecipeItem key={recipe} recipe={recipe} />
                ))}
            </div>
            ) : (
            <h3>You have not set any recipes</h3>
            )}
        </section>
    )
}

export default Feed