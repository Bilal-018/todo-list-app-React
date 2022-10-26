import React from "react";

export default function Task(props) {
  const listItems = props.list.map((item, index) => (
    <li key={index} className="list-group-item d-flex justify-content-between">
      {item}
      <span>
        <button
          type="button"
          className={`btn btn-outline-success btn-sm mx-1 ${
            index === 0 ? "disabled" : ""
          } `}
          onClick={() => props.prioritySet(index)}
        >
          <i className="bi bi-shift"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm mx-1"
          onClick={() => props.deleteItem(index)}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </span>
    </li>
  ));

  return (
    <>
      <div className="container my-5">
        <ul className="list-group">{listItems}</ul>
      </div>
    </>
  );
}
