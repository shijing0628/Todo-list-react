import React, { useState, useEffect } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import DatePicker from "react-date-picker";

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
  const [value, onChange] = useState(new Date());

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

          <DatePicker onChange={onChange} value={value} />
        </div>
      </li>
      {textEnable ? (
        <textarea
          class="form-control"
          aria-label="With textarea"
          rows="4"
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
