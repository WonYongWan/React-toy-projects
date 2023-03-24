import React from "react";

export default function Todo({todo, onUpdate, onDelete}) {
  return (
    <li>
      <input type="checkbox" />
      <label>{todo.text}</label>
    </li>
  )
}