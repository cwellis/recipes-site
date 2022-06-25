import React from 'react';

let Addrecipe = () => {

    const saveRecipe = (event) => {
        fetch("http://localhost:5000/createrecipe", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"hello": event.target.value})
        })
    }

    return (
        <div className='app'>

            <textarea 
                autoFocus
                className='textarea'
                onChange={saveRecipe}
            />

        </div>
    )
}

export default Addrecipe