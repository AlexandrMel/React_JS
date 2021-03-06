
import React from 'react';
import ToDoItem from './ToDoItem';

class ToDonesContainer extends React.Component {
  updateItem = id => {
    this.props.updateFromChild(id)
  }
  render() {

const data = this.props.items
  const todoItems = data.map(el => {
    return <ToDoItem key={el.id} data={el} handleUpdate={this.updateItem}></ToDoItem>;
  });

  return (
    <div className="todones-container">
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