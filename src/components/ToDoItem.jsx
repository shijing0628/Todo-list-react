import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function ToDoItem({ title, handleDelete, handleEdit }) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="text-success mx-2">
            <AiFillEdit onClick={handleEdit} />
          </span>
          <span className="text-danger mx-2">
            <AiFillDelete onClick={handleDelete} />
          </span>
        </div>
      </li>
    </div>
  );
}

export default ToDoItem;
