import {useState} from 'react';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: true },
  { id: 5, text: 'Implement task 5', completed: false },
];

export default function TodoSection() {

const [todosList, setTodosList] = useState(initTodos)

console.log('todosList ===', todosList);
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todosList.map((tObj) => <li key={tObj.id} >{tObj.text} - {tObj.completed === true ? 'done' : 'not done'} </li>)}
      </ul>
    </div>
  )
}
