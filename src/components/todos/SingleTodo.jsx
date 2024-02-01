
import { useState } from "react";

export default function SingleTodo({ onDelete, todoTitle, todoComplete, onDoneUndone, onTodoEditTitle, todoId }) {
  const [title, setTitle] = useState(todoTitle);
  const [isEditOn, setIsEditOn] = useState(false);

  function makeDone() {
    onDoneUndone();
  }

  function btnEditChangeTitle() {
    if (isEditOn) {
      setTitle(title);
      onTodoEditTitle(todoId, title);
    }
    setIsEditOn(!isEditOn);
  }

  return (
    <div className="todo-item-grid">
      {isEditOn ? (
        /* kai isEditON yra true rodom */
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="edit todo" />
      ) : (
        /* jei nerodom kai isEditOn yra on */
        <h4>{title} </h4>
      )}

      <p>{todoComplete ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{todoComplete ? 'Make Inomplete' : 'Make Complete'} </button>
      <button onClick={onDelete}>Delete</button>
      {/* keiciam isEditOn i priesinga */}
      <button onClick={btnEditChangeTitle}>{isEditOn ? 'Confirm New Title' : 'Edit'}</button>
    </div>
  );
}
