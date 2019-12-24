
import React from 'react';

const ToDoItem = (props) => {
  let updateItem =(e) => {
    e.preventDefault();
   const id = props.data.id;
   props.handleUpdate(id)
  //  console.log(id)
  }
let btn = ""
  !props.data.status? btn = '✔': btn = "↻"

  return (
    <div className="item">
      <p>{props.data.text}</p>
  <button className="btn" onClick={updateItem}>{btn}</button>
    </div>
  );
}

export default ToDoItem;