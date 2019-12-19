
import React from 'react';
import FormContainer from './FormContainer';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';



class MainContainer extends React.Component {

  constructor (props){
    super(props)
    this.state = { items: [
      { text: 'Do your thing', status: false, id: 1407892 },
      { text: 'Be yourself', status: true, id: 1467892 },
      { text: 'Explain something', status: false, id: 5436436 },
      { text: 'Be a dog', status: false, id: 4363434 },
      { text: 'Do your thing', status: true, id: 1407592 },
      { text: 'Be yourself', status: false, id: 1467896 },
      { text: 'Explain something to someone', status: false, id: 5476436 },
      { text: 'World peace', status: true, id: 4363414 }
    ]}
  }
  render() {
        const data = this.state.items
        const todos = data.filter(x => !x.status)
        const todones = data.filter(x => x.status)
        return (
          <main className="main-container">
            <FormContainer></FormContainer>
            <ToDosContainer items={todos}></ToDosContainer>
            <ToDonesContainer items={todones}></ToDonesContainer>
          </main>
        );
  }
}

export default MainContainer;