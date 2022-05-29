import React, { useState, useEffect } from 'react';

import './App.css';
import { Form } from "./components/Form.js";
import { TodoList } from "./components/TodoList.js";


function App() {
  
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
        let todoLocal = JSON.parse(localStorage.getItem("todo"))
        setTodos(todoLocal);
      }
    };
    getLocalTodos()
  },[])

  useEffect(() => {
    filterHandler();
    
    const saveLocalTodos = () => {
      localStorage.setItem("todo", JSON.stringify(todos));
    }
    saveLocalTodos();
  },[todos, status])

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  };

 

  return (
    <div className="App">
      <header> <h1>Johnny's todo List</h1> </header>
      <Form 
        setStatus={setStatus}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        />
    <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;

