import { useState } from "react"

export default function SingleTodo({todoTitle, todoComplete} ) {

  const [isDone, setIsDone] = useState(todoComplete)

  const [title, setTitle] = useState(todoTitle)

  function makeDone() {
    setIsDone(!isDone)
  }
  return (
    <div className="flex">
      <h4>{title} </h4>
      <p>{isDone ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{isDone ?  'Make Inomplete' : 'Make Complete'} </button>
    </div>
  )
}
