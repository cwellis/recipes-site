import RecipeItem from "../components/RecipeItem"
import { useSelector } from 'react-redux'
function Recipes() {
    const { recipes } = useSelector(
        (state) => state.recipes
      )

  return (
    <section className='content'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.map((recipe) => (
              <RecipeItem key={recipe._id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <h3>You have not set any recipes</h3>
        )}
    </section>
  )
}

export default Recipes