import {useState} from 'react';
import SingleTodo from './SingleTodo';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: true },
  { id: 5, text: 'Implement task 5', completed: false },
];

export default function TodoSection() {

const [todosList, setTodosList] = useState(initTodos)
const [inputValue, setInputValue] = useState('')

function hendleDelete(itemId) {
  // grazinti versija masivo kuriame nera id 4
  const delete4 = todosList.filter((tItem) => tItem.id !== itemId)
  setTodosList(delete4)
}

function handleDoneUndone(idToChange) {
console.log('idToChange ===', idToChange);
// const todosListCopy = [...todosList]
// const elToChange = todosListCopy.find((tObj) => tObj.id === idToChange)
// console.log('elToChange ===', elToChange);
// elToChange.completed = !elToChange.completed
// setTodosList(todosListCopy)

const modifiedArrCopyWithChange = todosList.map((tObj) => {
  if (tObj.id === idToChange) {
// noriu grazinti kopija
return {...tObj, completed: !tObj.completed}
  }
  return tObj
})
setTodosList(modifiedArrCopyWithChange)
}

function handleNewTodo() {
console.log('addingtodo');
// { id: 50, text: 'Complete task 1', completed: false },
// iskonsolinti new todoValue
// iskonsolinti obj
}

function newValue(e) {
const newValue = e.target.value
setInputValue(newValue)

}

  return (
    <div>
      <h2>Todos</h2>
      <h3>Total done Todos: {todosList.filter((tObj) => tObj.completed).length} </h3>
      {/* <form> */}
<fieldset>
  <legend>Add todo</legend>
  <input value={inputValue} onChange={newValue} type="text" placeholder='add new todo' />
  <button onClick={handleNewTodo}>Add</button>
</fieldset>

      {/* </form> */}

      <button onClick={() => hendleDelete(4)}>Delete with id 4</button>
      <ul>
        {todosList.map((tObj) => <li key={tObj.id}><SingleTodo onDelete={() => hendleDelete(tObj.id)} onDoneUndone={() =>handleDoneUndone(tObj.id)} todoTitle={tObj.text} todoComplete={tObj.completed} /></li>)}
      </ul>
      
      <ul>
        {initTodos.map((tObj) => <li key={tObj.id} > 
        id: {tObj.id} {tObj.text} - {tObj.completed === true ? 'done' : 'not done'} 
        <button>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}
