import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRecipe } from '../../features/recipes/recipeSlice'

const RecipeModal = ({modalOpened, setModalOpened, recipe}) => {

    const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form className='form-group'>
        <h3>Update Recipe</h3>

        <input 
            type="text" 
            name='title'
            placeholder='Title'
        />

        <input 
            type="text" 
            name='prepTime'
            placeholder='Prep Time'
        />

        <input 
            type="text" 
            name='cookTime'
            placeholder='Cook Time'
        />

        <input 
            type="text" 
            name='ingredients'
            placeholder='Ingredients'
        />

        <input 
            type="text" 
            name='instructions'
            placeholder='Instructions'
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