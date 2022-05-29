import React from 'react'
import './AddRecipe.css'

let AddRecipe = () => {
    

    let collectInpt = () => {
        let name = document.querySelector('.name')
        let size = document.querySelector('.size')
        let time = document.querySelector('.time')
        let ing = document.querySelector('.ing')
        let steps = document.querySelector('.steps')
        
        console.log (name.value)
        console.log (size.value)
        console.log (time.value)
        console.log (ing.value)
        console.log (steps.value)
    }
    
    return (
        <div>
            <div className='container'>
                <input className='name' type="text" placeholder='Recipe Name' />
                <input className='size' type="text" placeholder='Serving Size' />
                <input className='time' type="text" placeholder='Time to Cook' />
                <input className='ing' type="text" placeholder='Ingredients'/>
                <input className='steps' type="text" placeholder='Steps'/>
                <button onClick={ collectInpt }>Submit Recipe</button>
            </div>
        </div>

    )
}

export default AddRecipe;