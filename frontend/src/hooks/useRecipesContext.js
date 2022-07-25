import { RecipesContext } from "../context/RecipeContext"
import { useContext } from "react"

export const useRecipesContext = () => {
  const context = useContext(RecipesContext)

  if(!context) {
    throw Error('useRecipeContext must be used inside an RecipeContextProvider')
  }

  return context
}