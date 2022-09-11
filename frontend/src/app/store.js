import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import recipesReducer from '../features/recipes/recipeSlice'
import communitiesReducer from '../features/communities/communitySlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    recipes: recipesReducer,
    communities: communitiesReducer,
  },
});
