
import React from 'react';

const ToDoItem = (props) => {
let btn = ""
  !props.status? btn = '✔': btn = "↻"

  return (
    <div className="item">
      <p>{props.text}</p>
  <button className="btn">{btn}</button>
    </div>
  );
}

export default ToDoItem;