import React, { useState } from "react";

export default function AddTask(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    props.updateList(text);
    setText("");
  };

  const handleEnter = (event) => {
    if (text.replace(/\s/g, "").length && event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#addbtn").click();
    }
  };

  return (
    <>
      <div className="card w-75 m-auto text-center mb-5">
        <div className="card-header">Add Task</div>
        <div className="card-body container">
          <form action="javascript:void(0)">
            <input
              onKeyPress={handleEnter}
              autoFocus="on"
              name="input"
              autoComplete="on"
              className="form-control"
              type="text"
              placeholder="Add Task"
              maxLength="70"
              value={text}
              onChange={(element) => {
                setText(element.target.value);
              }}
            />
            <button
              id="addbtn"
              onClick={handleClick}
              className={`btn btn-outline-primary btn-sm rounded-circle mt-3 ${
                !text.replace(/\s/g, "").length ? "disabled" : ""
              }`}
            >
              <i className="bi bi-plus" style={{ fontSize: "20px" }}></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
