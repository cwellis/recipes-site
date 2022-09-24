import { Modal, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipe } from '../../features/recipes/recipeSlice'
import './RecipePreview.css'

const RecipePreview = ({ recipe, previewOpened, setPreviewOpened }) => {

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
    

    return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={previewOpened}
      onClose={()=>setPreviewOpened(false)}
    >

      <div className='recipeModal'>

        <h1>{title}</h1>

        <h3>Prep Time:</h3>
        <span>{prepTime}</span>

        <h3>Cook Time:</h3>
        <span>{cookTime}</span>

        <h3>Ingredients:</h3>
        <span className='p_wrap'>{ingredients.replaceAll(/\\n/g, "<br />")}</span>

        <h3>Instructions:</h3>
        <span className='p_wrap'>{instructions}</span>


      </div>




    </Modal>
  );
}

export default RecipePreview