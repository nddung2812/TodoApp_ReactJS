import React from 'react';

export const Form = ({ inputText, setInputText, setTodos, todos }) => {

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault()
    // to stop the page refresh
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random()*1000}
    ]);
    setInputText("");
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

