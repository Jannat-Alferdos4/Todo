import React, {Component} from 'react'
import TodoItems from './components/TodoItem/TodoItem'
import AddItem from './components/AddItem/AddItem'

class App extends Component {
  state = {
    items:[
      {id:1, name: "Eman", age:22},
      {id:2, name: "Amira", age:21},
      {id:3, name: "Mariam", age:20}
    ]
  }

  deletItem = (id) =>{
    // let items = this.state.items;
    // let i = items.findIndex(item => item === id);
    // items.splice(i, 1);
    let items = this.state.items.filter(item => {
      return item.id !== id;
    })
    this.setState({items});
  }
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  };

  render() {
    return (
      <div className="App">
        TODO App
        <TodoItems items= {this.state.items} deletItem={this.deletItem}/>
        <AddItem item={this.addItem}/>
      </div>
    );
  }
}

export default App;
