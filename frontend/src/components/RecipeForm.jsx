import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createRecipe} from '../features/recipes/recipeSlice'

function RecipeForm() {

    const [title, setTitle] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')

    const dispatch = useDispatch()

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
            </div>

            <div className="form-group">
                <button className="btn btn-block" type='submit'>
                    Add Recipe
                </button>
            </div>
        </form>
    </section>
  )
}

export default RecipeForm