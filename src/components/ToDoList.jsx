import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ items, clearList, handleDelete, handleEdit }) {
  const { title, id } = items;
  return (
    <>
      <ul className="list-group my-5">
        <div className="d-flex flex-column">
          <h1 className="text-center mt-5 mx-auto">My Todo List</h1>

          {items.length !== 0 &&
            items.map((item, index) => {
              console.log(item);
              return (
                <ToDoItem
                  key={index}
                  title={title}
                  handleDelete={() => {
                    handleDelete(id);
                  }}
                  handleEdit={() => {
                    handleEdit(id);
                  }}
                />
              );
            })}
          <button
            onClick={clearList}
            className="btn btn-outline-danger add-btn mx-5 mb-5 px-4"
            type="submit"
          >
            Clear List
          </button>
        </div>
      </ul>
    </>
  );
}

export default ToDoList;
