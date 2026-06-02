import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../features/todo/todoSlice";
import '../Cssfiles/Addform.css';

export default function AddForm() {
  let [task, setTask] = useState("");
  let dispatch = useDispatch();
  let [error, setError]= useState("");
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
     if (task.trim() === "") {
     setError("Task Cannot be Empty")
      return;
    }
    setTask('');
    setError('');
    dispatch(addtodo(task));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="inputsection">
        <input className="inputbox"
          type="text" value={task} placeholder="Enter Your task"
          onChange={(event) => setTask(event.target.value) }
        ></input>
        <button className="addTaskbtn">Add Task</button><br></br>
      <p style={{color: "red"}}> {error}</p>
      </form>
    </>
  );
}
