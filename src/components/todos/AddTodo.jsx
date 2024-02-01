import { useState } from 'react'

export default function AddTodo({onNewTodo}) {

  const [inputValue, setInputValue] = useState('')

  function newValue(e) {
    const newValue = e.target.value
    setInputValue(newValue)
    }

function sendValueUp() {
  onNewTodo(inputValue)
}

  return (
    <div>
      {/* <form> */}
    <fieldset>
      <legend>Add todo</legend>
      <input value={inputValue} onChange={newValue} type="text" placeholder='add new todo' />
      <button onClick={sendValueUp}>Add</button>
    </fieldset>
      {/* </form> */}
      </div>
  )
}
