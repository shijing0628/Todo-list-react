import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [items, setItems] = useState([]);
  const [editInfo, setEditInfo] = useState({});
  const [editItem, setEditItem] = useState(false);

  // add to list submit
  const handleSubmit = (e, inputText) => {
    e.preventDefault();
    setItems([
      {
        id: editInfo && editInfo.id ? editInfo.id : uuidv4(),
        title: inputText,
      },
      ...items,
    ]);

    setEditInfo({});
    setEditItem(false);
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
    setEditInfo({
      title: editItem.title,
      id: editItem.id,
    });
    setEditItem(true);
  };

  const addContentToItem = (id, textContent) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.textContent = textContent;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-uppercase text-center">My First todo App</h3>
            <ToDoInput
              handleSubmit={handleSubmit}
              editItem={editItem}
              editInfo={editInfo}
            />
            <ToDoList
              items={items}
              clearList={clearList}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              addContentToItem={addContentToItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
