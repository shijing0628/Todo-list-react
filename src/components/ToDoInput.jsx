import React, { useState } from "react";

function ToDoInput({ handleSubmit, handleChangeInput }) {
  return (
    <>
      <div className="card text-center mt-5">
        <h1 className="text-center">Todo Input</h1>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Input</span>
              </div>
              <input
                type="text"
                name="myinput"
                className="form-control text-capitalize"
                placeholder="please add your event"
                onChange={handleChangeInput}
              ></input>
            </div>
            <button
              className="btn btn-outline-primary mt-3 mx-5 mb-5 px-4"
              type="submit"
            >
              Add to List
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ToDoInput;
