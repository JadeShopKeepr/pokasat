import React from "react";
import Header from "../../Components/Header";
import AddBtn from "../../Components/addBtn";
import PopUp from "../../Components/Modal";
import Task from "../../Components/Task";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [todo, setTodo] = React.useState([]);

  const addTodo = (task) => {
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        task,
        completed: false
      }
    ]);
  };

  return (
    <div className={styles.container}>
      <Header />
      <PopUp open={open} addTodo={addTodo} />
      <main>
        {todo.map((todo, index) => (
          <Task task={todo} key={index} />
        ))}
      </main>
      <AddBtn setOpen={setOpen} open={open} />
    </div>
  );
};

export default HomePage;
