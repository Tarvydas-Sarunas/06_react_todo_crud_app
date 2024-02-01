
import SingleTodo from './SingleTodo'

export default function TodoListe({list, onDelete, onDoneUndone, onTodoEditTitle}) {
  return (
    <div><ul>
    {list.map((tObj) => 
    <li key={tObj.id}>
      <SingleTodo 
      todoId={tObj.id}
      onDelete={() => onDelete(tObj.id)} 
      onDoneUndone={() =>onDoneUndone(tObj.id)} 
      todoTitle={tObj.text} 
      todoComplete={tObj.completed} 
      onTodoEditTitle={onTodoEditTitle}
      />
      </li>
      )}
  </ul>
  </div>
  )
}
