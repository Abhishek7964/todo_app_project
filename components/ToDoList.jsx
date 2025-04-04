import React from "react";

const ToDoList = ({
  todolist,
  setTask,
  setEditingTaskIndex,
  setToDoList,
  editingTaskIndex,
  setIsUpdate,
}) => {
  const handleEdit = (index) => {
    setTask(todolist[index]);
    setEditingTaskIndex(index);
    setIsUpdate(true);
  };

  const handleDelete = (index) => {
    setToDoList((prevList) => prevList.filter((task, i) => i !== index));
  };

  return (
    <div className="todo-list-container">
      {todolist.map((task, index) => (
        <div key={index} className="individual-task">
          <input clasName="checkbox" id="done" type="checkbox"></input>
          <span className="task" key={index}>
            {task}
          </span>
          {"   "}
          <span className="button-container">
            <button
              className="edit-btn"
              title="Edit"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            {"   "}
            <button
              className="delete-btn"
              title="Delete"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
