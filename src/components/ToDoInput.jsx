import React, { useState, useEffect } from "react";

function ToDoInput({ handleSubmit, editItem, editInfo }) {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    setInputText(editInfo && editInfo.title ? editInfo.title : "");
  }, [editInfo]);

  return (
    <>
      <div className="card text-center mt-5">
        <h1 className="text-center">Todo Input</h1>
        <div className="card-body">
          <form onSubmit={(e) => handleSubmit(e, inputText)}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Input</span>
              </div>
              <input
                value={inputText}
                type="text"
                name="myinput"
                className="form-control text-capitalize"
                placeholder="please add your event"
                onChange={handleChangeInput}
              />
              <input type="reset" defaultValue="Reset" />
            </div>
            <button
              type="submit"
              className={
                editItem
                  ? "btn mt-3 mx-5 mb-5 px-4 btn-danger"
                  : "btn mt-3 mx-5 mb-5 px-4  btn-outline-primary"
              }
            >
              {editItem ? "Edit List" : "Add to List"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ToDoInput;
