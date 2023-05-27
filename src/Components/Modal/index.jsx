import React from "react";
import style from "./PopUp.module.css";

const PopUp = ({ open, addTodo }) => {
  const [task, setTask] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask("");
  };

  if (!open) return null;
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.header}>
          <h2 className={style.title}>Add Task</h2>
        </div>
        <div className={style.body}>
          <form className={style.form}>
            <input
              value={task}
              type="text"
              placeholder="Write something here"
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleSubmit} className={style.button}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
