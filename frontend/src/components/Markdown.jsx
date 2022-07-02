import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './mkdwn.css'

let Markdown = () => {

    const [input, setInput] = useState()

    return (
        <div>
            <div className='app'>
            
                <textarea 
                    autoFocus
                    className='textarea'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <ReactMarkdown children={input} className='markdown'/>
            </div>

            <div className='btn-pos'>
                <button className='btn'>Publish</button>
            </div>
        </div>
        
    )
}

export default Markdown