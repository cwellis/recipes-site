import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import recipeService from './recipeService'

const initialState = {
  recipes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new recipe
export const createRecipe = createAsyncThunk(
  'recipes/create',
  async (recipeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.createRecipe(recipeData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user recipes
export const getRecipes = createAsyncThunk(
  'recipes/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.getRecipes(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// get recipe feed
export const getFeed = createAsyncThunk(
  'recipes/getFeed',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.getFeed(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Like user recipe
export const likeRecipe = createAsyncThunk(
  'recipes/update',
  async(recipeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.likeRecipe(recipeData.id, {
        likes: recipeData.likes++,
      }, token )
    } catch (error) {
      const message = 
      (error.response && 
        error.response.data && 
        error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
    }
  }
)

// Update user recipe
export const updateRecipe = createAsyncThunk(
  'recipes/update',
  async (recipeData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.updateRecipe( recipeData.id, { 
        title: recipeData.title,
        prepTime: recipeData.prepTime,
        cookTime: recipeData.cookTime,
        ingredients: recipeData.ingredients,
        instructions: recipeData.instructions,
       }, token )
    } catch (error) {
      const message = 
        (error.response && 
          error.response.data && 
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user recipe
export const deleteRecipe = createAsyncThunk(
  'recipes/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await recipeService.deleteRecipe(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createRecipe.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createRecipe.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes.push(action.payload)
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getRecipes.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getRecipes.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes = action.payload
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getFeed.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getFeed.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes = action.payload
      })
      .addCase(getFeed.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteRecipe.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes = state.recipes.filter(
          (recipe) => recipe._id !== action.payload.id
        )
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateRecipe.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.recipes = state.recipes.map(recipe => {
          return recipe._id === action.payload._id ? action.payload : recipe
        })
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = recipeSlice.actions
export default recipeSlice.reducer