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

function deleteNb4(itemId) {
  // grazinti versija masivo kuriame nera id 4
  const delete4 = todosList.filter((tItem) => tItem.id !== itemId)
  setTodosList(delete4)
}
console.log('todosList ===', todosList);
  return (
    <div>
      <h2>Todos</h2>
      <h3>Total done Todos: {todosList.filter((tObj) => tObj.completed).length} </h3>
      <button onClick={() => deleteNb4(4)}>Delete with id 4</button>
      <ul>
        {todosList.map((tObj) => <li key={tObj.id}><SingleTodo todoTitle={tObj.text} todoComplete={tObj.completed} /></li>)}
      </ul>
      
      <ul>
        {todosList.map((tObj) => <li key={tObj.id} > 
        id: {tObj.id} {tObj.text} - {tObj.completed === true ? 'done' : 'not done'} 
        </li>)}
      </ul>
    </div>
  )
}
