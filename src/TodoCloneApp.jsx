import { useState } from "react";
import { DarkModeProvider } from "./components/TodoClone/context/DarkModeContext";
import Header from "./components/TodoClone/Header/Header";
import TodoList from "./components/TodoClone/TodoList/TodoList";

const filters = ['all', 'active', 'completed'];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      <TodoList filter={filter}/>
    </DarkModeProvider>
  )
}