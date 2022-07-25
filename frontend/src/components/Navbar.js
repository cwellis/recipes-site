import { Link } from 'react-router-dom'


const Navbar = () => {

    return (
        <header className='navbar'>
            <div className="container">
                <Link to='/'>
                    <h1>Recipe Buddy</h1>
                </Link>

                <Link to='/addRecipe'>
                    <h2>Add Recipe</h2>
                </Link>

                <Link to='/Recipes'>
                    <h2>Recipes</h2>
                </Link>

            </div>
        </header>
    )
}

export default Navbar