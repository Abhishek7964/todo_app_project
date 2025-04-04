import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

const ToDoDetail = () => {
  const [task, setTask] = useState("");
  const [todolist, setToDoList] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [charLengthValidation, setCharLengthValidation] = useState(false);
  const errorMessage = "Cannot add a blank task!";

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddClick = () => {
    if (task.length >= 1) {
      setToDoList((prevList) => [task, ...prevList]);
    } else {
      setCharLengthValidation(true);
    }
    setTask("");
  };

  const handleUpdateClick = () => {
    setToDoList((prevList) => {
      const updatedList = [...prevList];
      updatedList[editingTaskIndex] = task;
      return updatedList;
    });

    setEditingTaskIndex(null);
    setTask("");
    setIsUpdate(false);
  };

  useEffect(() => {
    setCharLengthValidation(false);
  }, [todolist]);

  return (
    <div className="todo-detail-container">
      <Header />
      <div className="todo-detail">
        <input
          className="task-input"
          type="text"
          name="todo"
          value={task}
          placeholder="Write your task"
          onChange={handleInputChange}
        ></input>
        {isUpdate ? (
          <button
            title="Update Task"
            className="update-task-btn"
            onClick={handleUpdateClick}
          >
            <FontAwesomeIcon icon={faFilePen} />
          </button>
        ) : (
          <button
            title="Add Task"
            className="add-task-btn"
            onClick={handleAddClick}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        )}
      </div>
      {charLengthValidation && (
        <div className="validation">
          <FontAwesomeIcon icon={faTriangleExclamation} />
          {errorMessage}
        </div>
      )}
      <ToDoList
        todolist={todolist}
        setTask={setTask}
        setEditingTaskIndex={setEditingTaskIndex}
        setToDoList={setToDoList}
        editingTaskIndex={editingTaskIndex}
        setIsUpdate={setIsUpdate}
      />
    </div>
  );
};

export default ToDoDetail;
