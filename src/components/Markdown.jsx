import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './mkdwn.css'

let Markdown = () => {

    const [name, setName] = useState()
    const [prep, setPrep] = useState()
    const [cook, setCook] = useState()
    const [serving, setServing] = useState()
    const [ingredients, setIngredients] = useState()
    const [instructions, setInstructions] = useState()

    return (
        <div className='app'>
            
            <textarea 
                autoFocus
                className='textarea'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <textarea 
                autoFocus
                className='textarea'
                value={prep}
                onChange={(e) => setPrep(e.target.value)}
            />

            <textarea 
                autoFocus
                className='textarea'
                value={cook}
                onChange={(e) => setCook(e.target.value)}
            />

            <textarea 
                autoFocus
                className='textarea'
                value={serving}
                onChange={(e) => setServing(e.target.value)}
            />

            <textarea 
                autoFocus
                className='textarea'
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />

            <textarea 
                autoFocus
                className='textarea'
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />

            <ReactMarkdown children={name} className='markdown'/>
            <ReactMarkdown children={prep} className='markdown'/>
            <ReactMarkdown children={cook} className='markdown'/>
            <ReactMarkdown children={serving} className='markdown'/>
            <ReactMarkdown children={ingredients} className='markdown'/>
            <ReactMarkdown children={instructions} className='markdown'/>
        </div>
    )
}

export default Markdown