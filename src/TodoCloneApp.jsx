import { useState } from "react";
import Header from "./components/TodoClone/Header/Header";
import TodoList from "./components/TodoClone/TodoList/TodoList";


const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </>
  )
}