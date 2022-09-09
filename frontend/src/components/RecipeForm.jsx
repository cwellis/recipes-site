import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import {createRecipe} from '../features/recipes/recipeSlice'

let RecipeForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')

    const { isError, message } = useSelector(
        (state) => state.auth
    )

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createRecipe({title, prepTime, cookTime, ingredients, instructions}))
        setTitle('')
        setPrepTime('')
        setCookTime('')
        setIngredients('')
        setInstructions('')
    }


  return (
    <section className="form">
        <form onSubmit={ onSubmit }>

            <div className="form-group">
                <label htmlFor="text">Recipe Name</label>
                <input 
                    type="text" 
                    name='title' 
                    id='title' 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Recipe Name
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="text">Prep Time</label>
                <input 
                    type="prepTime" 
                    name='prepTime' 
                    id='prepTime' 
                    value={prepTime} 
                    onChange={(e) => setPrepTime(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Prep Time
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="text">Cook Time</label>
                <input 
                    type="text" 
                    name='cookTime' 
                    id='cookTime' 
                    value={cookTime} 
                    onChange={(e) => setCookTime(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Cook Time
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="text">Ingredients</label>
                <input 
                    type="text" 
                    name='ingredients' 
                    id='title' 
                    value={ingredients} 
                    onChange={(e) => setIngredients(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Ingredients
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="text">Instructions</label>
                <input 
                    type="text" 
                    name='instructions' 
                    id='instructions' 
                    value={instructions} 
                    onChange={(e) => setInstructions(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Instructions
                </div>
            </div>

            <div className="form-group">
                <button 
                    className="btn btn-block" 
                    type='submit'
                >
                    Add Recipe
                </button>
            </div>
        </form>
    </section>
  )
}

export default RecipeForm