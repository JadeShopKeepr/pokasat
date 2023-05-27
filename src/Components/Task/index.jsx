import React from "react";
import styles from "./Task.module.css";
const Task = ({ task }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          enableBackground="new 0 0 32 32"
          xmlSpace="preserve"
        >
          <polyline
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeMiterlimit="10"
            points="28,8 16,20 11,15 "
          />
          <path
            d="M26.7,13.5c0.2,0.8,0.3,1.6,0.3,2.5c0,6.1-4.9,11-11,11S5,22.1,5,16S9.9,5,16,5c3,0,5.7,1.2,7.6,3.1l1.4-1.4
C22.7,4.4,19.5,3,16,3C8.8,3,3,8.8,3,16s5.8,13,13,13s13-5.8,13-13c0-1.4-0.2-2.8-0.7-4.1L26.7,13.5z"
          />
        </svg>
      </div>
      <div className={styles.text}>{task.task}</div>
      <div className={styles.date}>May 17</div>
    </div>
  );
};

export default Task;
