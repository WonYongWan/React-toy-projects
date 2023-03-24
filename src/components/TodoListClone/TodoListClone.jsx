import { useState } from "react"
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";


export default function TodoClone() {
  const [todos, setTodos] = useState([
    {id: '1', text: '장보기', status: 'active'},
    {id: '2', text: '산책', status: 'active'}
  ]);

  const handleAdd = (todo) => {setTodos([...todos, todo])}
  const handleUpdate = (updated) => {setTodos(todos.map(t => t.id === updated.id ? updated : t))}
  const handleDelete = (deleted) => {setTodos(todos.filter(t => t.id !== deleted.id))}

  return (
    <section>
      <ul>
        {todos.map(item => 
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}