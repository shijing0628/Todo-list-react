import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({
  items,
  clearList,
  handleDelete,
  handleEdit,
  addContentToItem,
}) {
  return (
    <>
      <ul className="list-group my-5">
        <div className="d-flex flex-column">
          <h1 className="text-center mt-5 mx-auto">My Todo List</h1>

          {items.length !== 0 &&
            items.map((item, index) => {
              return (
                <ToDoItem
                  itemContent={item.textContent ? item.textContent : ""}
                  itemId={item.id}
                  key={index}
                  title={item.title}
                  handleDelete={() => {
                    handleDelete(item.id);
                  }}
                  handleEdit={() => {
                    handleEdit(item.id);
                  }}
                  addContentToItem={addContentToItem}
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
