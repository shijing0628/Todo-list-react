import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
function ToDoItem({
  title,
  handleDelete,
  handleEdit,
  addContentToItem,
  itemContent,
  itemId,
}) {
  const [textEnable, setTextEnable] = useState(false);
  const [textContent, setTextContent] = useState(itemContent);
  const handleClick = () => {
    if (textEnable) {
      addContentToItem(itemId, textContent);
    }
    setTextEnable(!textEnable);
  };

  useEffect(() => {
    setTextContent(itemContent);
  }, [itemContent]);

  return (
    <div>
      <li className="list-group-item d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="text-info mx-2">
            <MdDescription onClick={handleClick} />
          </span>

          <span className="text-success mx-2">
            <AiFillEdit onClick={handleEdit} />
          </span>
          <span className="text-danger mx-2">
            <AiFillDelete onClick={handleDelete} />
          </span>
        </div>
      </li>
      {textEnable ? (
        <textarea
          rows="4"
          cols="50"
          onChange={(e) => {
            setTextContent(e.target.value);
          }}
        >
          {textContent}
        </textarea>
      ) : null}
    </div>
  );
}

export default ToDoItem;
