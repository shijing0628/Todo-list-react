import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([""]);
  const editItem = false;

  // add to list submit
  const handleSubmit = (e, inputText) => {
    e.preventDefault();
    setItems([
      {
        id: uuidv4(),
        title: inputText,
      },
      ...items,
    ]);
  };

  // clear all list
  const clearList = () => {
    setItems([]);
  };

  const handleDelete = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  };

  const handleEdit = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);

    let editItem = items.find((item) => item.id === id);

    setItems({
      items: deleteItem,
      item: editItem.title,
    });

    console.log(editItem);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-uppercase text-center">My First todo App</h3>
            <ToDoInput handleSubmit={handleSubmit} />
            <ToDoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
