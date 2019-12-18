
import React from 'react';
import ToDoItem from './ToDoItem';

class ToDonesContainer extends React.Component {
  render() {

const data = this.props.items
  const todoItems = data.map(el => {
    return <ToDoItem key={el.id} text={el.text} status={el.status}></ToDoItem>;
  });

  return (
    <div className="todos-container">
      {data.length > 0 && (
        <div className="todos">
          <h5>TODONES</h5>
          {todoItems}
        </div>
      )}
    </div>
  );
}
}

export default ToDonesContainer;