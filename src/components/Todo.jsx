import { MdDelete, MdEdit } from "react-icons/md";
import EditTodo from "./EditTodo";

function Todo({ todo , deletTodo, taggleCompelted, taggleEditing, editTodo}) {
  return (
    todo.isEditing ? <EditTodo todo={todo} editTodo={editTodo} /> :
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      <p onClick={() => {taggleCompelted(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit style={{cursor: "pointer"}}
        onClick={() => {taggleEditing(todo.id)}}/>
        <MdDelete style={{cursor: "pointer", marginLeft:'10px'}} 
        onClick={() => {deletTodo(todo.id)}}/>
      </div>
    </div>
  );
}

export default Todo;
