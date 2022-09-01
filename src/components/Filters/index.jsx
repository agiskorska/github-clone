import React, { useState } from 'react'
import './index.css'
function index({setFilters, filters}) {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        setFilters(input)
        setInput('')
    }
  return (
    <div className='filters'>
        <input type='text' value={input} onChange={handleInput} />
        <input type="submit" onClick={handleSubmit}/>
    </div>
  )
}

export default index