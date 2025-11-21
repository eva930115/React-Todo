import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃浴室", id: Math.random() ,isCompleted: false, isEditing: false},
    { content: "寫作業", id: Math.random() ,isCompleted: false, isEditing: false},
  ]);

  const addTodo = (content) => {
    // ...其餘運算子:將todos陣列展開 ； content:content = content(屬姓名=變數名)
    setTodos([...todos, { content, id: Math.random() ,isCompleted: false, isEditing: false}]);
  };

  const deletTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const taggleCompelted = (id) => {
    setTodos(todos.map((todo) => {
        return todo.id === id 
        ? {...todo, isCompleted: !todo.isCompleted} 
        : todo
    }))
  }

  const taggleEditing = (id) => {
    setTodos(todos.map((todo) => {
        return todo.id === id 
        ? {...todo, isEditing: !todo.isEditing} 
        : todo
    })) 
  }

  const editTodo = (id, newContent) => {
    setTodos(todos.map((todo) => {
        return todo.id === id 
        ? {...todo, content: newContent, isEditing: false} 
        : todo
    })) 
  }

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} deletTodo={deletTodo} taggleCompelted={taggleCompelted} taggleEditing={taggleEditing} editTodo={editTodo} />;
      })}
    </div>
  );
}

export default TodoWrapper;
