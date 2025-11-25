import { useState, useEffect } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  // 1️⃣ 初次載入：從 API 取得全部 todos
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  // 2️⃣ 新增 Todo（POST）
  const addTodo = async (content) => {
    const res = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        content,
        isCompleted: false,
      }),
    });

    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
  };

  // 3️⃣ 刪除 Todo（DELETE）
  const deletTodo = async (id) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    });

    setTodos(todos.filter(todo => todo._id !== id));
  };

  // 4️⃣ 切換完成狀態（PUT）
  const taggleCompelted = async (id) => {
    const target = todos.find(todo => todo._id === id);

    const res = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        isCompleted: !target.isCompleted,
      }),
    });

    const updated = await res.json();
    setTodos(todos.map(todo => todo._id === id ? updated : todo));
  };

  // 5️⃣ 切換編輯模式（不需要 API）
  const taggleEditing = (id) => {
    setTodos(todos.map(todo =>
      todo._id === id ? {...todo, isEditing: !todo.isEditing} : todo
    ));
  };

  // 6️⃣ 編輯 Todo（PUT）
  const editTodo = async (id, newContent) => {
    const res = await fetch(`http://localhost:3001/todos/${id}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        content: newContent,
      }),
    });

    const updated = await res.json();
    setTodos(todos.map(todo =>
      todo._id === id ? {...updated, isEditing: false} : todo
    ));
  };

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo
          todo={todo}
          key={todo._id}
          deletTodo={deletTodo}
          taggleCompelted={taggleCompelted}
          taggleEditing={taggleEditing}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default TodoWrapper;
