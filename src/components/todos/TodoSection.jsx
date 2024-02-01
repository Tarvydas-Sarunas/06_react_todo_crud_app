import {useState} from 'react';
import SingleTodo from './SingleTodo';
import { v4 as makeId } from 'uuid';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: true },
  { id: 5, text: 'Implement task 5', completed: false },
];

export default function TodoSection() {

const [todosList, setTodosList] = useState(initTodos)


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

function handleNewTodo(inputValue) {
console.log('addingtodo');
const newTodoObj = {
  id: makeId(),
  text: inputValue,
  completed: false
}
// iskonsolinti new todoValue
console.log('inputValue ===', inputValue);
// iskonsolinti obj
console.log('newTodo ===', newTodoObj);

setTodosList([newTodoObj, ...todosList])

}

function handleTodoEditTitle(idToUpdate, updatedText) {
console.log('handleTodoEditTitle', idToUpdate, updatedText);
}

  return (
    <div>
      <h2>Todos</h2>
      <h3>Total done Todos: {todosList.filter((tObj) => tObj.completed).length} </h3>
      <AddTodo onNewTodo={handleNewTodo}/>

      <button onClick={() => hendleDelete(4)}>Delete with id 4</button>
      <TodoList
        list={todosList}
        onTodoEditTitle={handleTodoEditTitle}
        onDelete={hendleDelete}
        onDoneUndone={handleDoneUndone}
      />
      
      <ul>
        {initTodos.map((tObj) => <li key={tObj.id} > 
        id: {tObj.id} {tObj.text} - {tObj.completed === true ? 'done' : 'not done'} 
        <button>Delete</button>
        </li>)}
      </ul>
    </div>
  )
}
