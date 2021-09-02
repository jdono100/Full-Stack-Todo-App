export default function TodoForm(props) {
  const { todo, handleInput, handleSubmit } = props
  return (
    <div className='p-10 space-x-4 bg-black'>
      <form>
        <input className='p-2' type='text' value={todo.title} onChange={event => handleInput(event.target.value)}></input>
        <button className='p-2 ml-5 text-white border-4 hover:bg-gray-700 transition duration-200' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
