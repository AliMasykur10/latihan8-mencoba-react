import "./todoHeader.css";
import TodoList from "../todoList/todoList";

const todoheader = () => {
  return (
    <div className="todo-header">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
};

export default todoheader;
