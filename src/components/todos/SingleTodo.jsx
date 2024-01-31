import { useState } from "react"

export default function SingleTodo({onDelete, todoTitle, todoComplete, onDoneUndone} ) {

  // const [isDone, setIsDone] = useState(todoComplete)

  const [title, setTitle] = useState(todoTitle)

  function makeDone() {
    // setIsDone(!isDone)
    onDoneUndone()
  }

  return (
    <div className="flex">
      <h4>{title} </h4>
      <p>{todoComplete ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{todoComplete ?  'Make Inomplete' : 'Make Complete'} </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
