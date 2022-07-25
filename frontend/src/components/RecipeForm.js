import { useState } from "react"
import { useRecipesContext } from "../hooks/useRecipesContext";

const RecipeForm = () => {
    const { dispatch } = useRecipesContext()

    const [title, setTitle] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recipe = { title, prepTime, cookTime, ingredients, instructions }

        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify(recipe),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        // if (!response.ok) {
        //     setError(json.error)
        //     setEmptyFields(json.emptyFields)
        // }

        if (response.ok) {
            setTitle('')
            setPrepTime('')
            setCookTime('')
            setIngredients('')
            setInstructions('')
            setError(null)
            setEmptyFields([])
            console.log('new Recipe added', json)
            dispatch({type: 'CREATE_Recipe', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Recipe</h3>

            <label>Recipe Title:</label>
            <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
             />

            <label>Prep Time</label>
             <input 
             type="text"
             onChange={(e) => setPrepTime(e.target.value)}
             value={prepTime}
             className={emptyFields.includes('title') ? 'error' : ''}
             />
            
            <label>Cooking Time</label>
            <input 
             type="text"
             onChange={(e) => setCookTime(e.target.value)}
             value={cookTime}
             className={emptyFields.includes('title') ? 'error' : ''}
             />

            <label>Ingredients</label>
            <input 
             type="text"
             onChange={(e) => setIngredients(e.target.value)}
             value={ingredients}
             className={emptyFields.includes('title') ? 'error' : ''}
             /> 

            <label>Instructions</label>
            <input 
             type="text"
             onChange={(e) => setInstructions(e.target.value)}
             value={instructions}
             className={emptyFields.includes('title') ? 'error' : ''}
             />

             <button>Add Recipe</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}

export default RecipeForm