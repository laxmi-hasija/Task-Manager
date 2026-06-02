import { useDispatch, useSelector } from "react-redux";
import AddForm from "./Addform";
import { deletetodo, markAsDone } from "../features/todo/todoSlice";
import "../Cssfiles/Todo.css";

export default function Todo() {
  const todos = useSelector((state) => state.todoReducer.todos);
  console.log(todos);
  let dispatch = useDispatch();

  let deleteTask = (id) => {
    dispatch(deletetodo(id));
  };
  let MarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
      <h2>Task Manager</h2>
      <p className="subtitle">
        <i>Stay Organized and get things done</i>
      </p>
      <AddForm />

      <ul className="todolist">
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          > <div className="outercontainer">
             <div className="taskContainer">
              {" "}
              <span className="listitem">{todo.task}</span>
              <span className="btns">
                {" "}
                <button
                  onClick={() => deleteTask(todo.id)}
                  className="Deletebtn"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    MarkAsDone(todo.id);
                  }}
                  className="successbtn"
                >
                  Mark As Done
                </button>
              </span>{" "}
            </div>
          </div>
           
          </li>
        ))}
      </ul>
    </>
  );
}
