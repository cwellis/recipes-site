import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createRecipe, reset} from '../../features/recipes/recipeSlice'
import Axios from 'axios'
import './RecipeForm.css'

let RecipeForm = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [prepTime, setPrepTime] = useState('')
    const [cookTime, setCookTime] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [imageSelected, setImageSelected] = useState('')
    
    const { isError, message } = useSelector(
        (state) => state.auth
        )
        
        useEffect(() => {
            
            if (isError) {
                console.log(message)
            }
            
            return () => {
                dispatch(reset())
            }
        }, [isError, message, dispatch])
        
        const onSubmit = (e) => {
            e.preventDefault()
            
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "h0mnibaw")
        
        Axios.post(
            "https://api.cloudinary.com/v1_1/dntfarm9f/image/upload", 
            formData
            ).then((res) => {
                console.log(res.data.secure_url)
                const image = res.data.secure_url
                const cloudinaryId = res.data.public_id

                dispatch(createRecipe({title, prepTime, cookTime, ingredients, instructions, image, cloudinaryId}))
                setTitle('')
                setPrepTime('')
                setCookTime('')
                setIngredients('')
                setInstructions('')
            })        

    }
    

  return (
    <section className="form">
        <form encType='multipart/form-data'>

            <div className="form-group">
                <label htmlFor="text">Recipe Name</label>
                <textarea
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
                <textarea 
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
                <textarea 
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
                <label htmlFor="text">Ingredients (Please enter each ingredient on it's own line)</label>
                <textarea 
                    type="text" 
                    name='ingredients' 
                    id='ingredients' 
                    value={ingredients} 
                    onChange={(e) => setIngredients(e.target.value)} 
                />
                <div className='hidden'>
                    Please Enter Ingredients
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="text">Instructions (Please enter each step on it's own line)</label>
                <textarea 
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
                <label htmlFor="imgUpload">Image</label>
                <input 
                    type="file" 
                    name='file'
                    id='imageUpload' 
                    onChange={(e) => {
                        setImageSelected(e.target.files[0])
                    }}
                />
                <div className='hidden'>
                    Please Enter Instructions
                </div>
            </div>

            <div className="form-group">
                <button 
                    className="btn btn-block" 
                    type='button'
                    onClick={onSubmit}
                >
                    Add Recipe
                </button>
            </div>
        </form>
    </section>
  )
}

export default RecipeForm