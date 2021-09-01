import React, { useState } from 'react'

export default function TodoForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(status);
  }
  return (
    <div className='p-10 space-x-4 bg-gray-400'>
      <form>
        <input type='text' value={status} onChange={event => setStatus(event.target.value)}></input>
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
