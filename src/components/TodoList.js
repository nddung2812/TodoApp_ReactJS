import React from 'react';

import Todo from './Todo';
export const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo 
          todo={todo} 
          todos={todos} 
          setTodos={setTodos} 
          text={todo.text} 
          key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
