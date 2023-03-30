import { useState } from "react";
import { DarkModeProvider } from "./components/TodoApp/context/DarkModeContext";
import Header from "./components/TodoApp/Header/Header";
import TodoList from "./components/TodoApp/TodoList/TodoList";

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