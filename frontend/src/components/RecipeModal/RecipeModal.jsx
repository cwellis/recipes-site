import { Modal, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipe } from '../../features/recipes/recipeSlice'

const RecipeModal = ({ recipe, modalOpened, setModalOpened }) => {

    const dispatch = useDispatch()
    const theme = useMantineTheme();

    const [title, setTitle] = useState(recipe.title)
    const [prepTime, setPrepTime] = useState(recipe.prepTime)
    const [cookTime, setCookTime] = useState(recipe.cookTime)
    const [ingredients, setIngredients] = useState(recipe.ingredients)
    const [instructions, setInstructions] = useState(recipe.instructions)

    const { isError, message } = useSelector(
      (state) => state.recipes
    )

    useEffect(() => {

      if (isError) {
        console.log(message)
      }
      
    }, [isError, message, dispatch])
    
    const onSubmit = (e) => {
      e.preventDefault()

      dispatch(updateRecipe({ id: recipe._id, title, prepTime, cookTime, ingredients, instructions }))

      setModalOpened(false)
    }

    return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form onSubmit={ onSubmit } className='form-group'>
        <h3>Update Recipe</h3>

        <h2></h2>

        <input 
            type="text"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />

        <input 
            type="text" 
            name='prepTime'
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)} 
        />

        <input 
            type="text" 
            name='cookTime'
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)} 
        />

        <input 
            type="text" 
            name='ingredients'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)} 
        />

        <input 
            type="text" 
            name='instructions'
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)} 
        />

        <button 
            className='btn'
        >
            Update Recipe
        </button>

      </form>
    </Modal>
  );
}

export default RecipeModal