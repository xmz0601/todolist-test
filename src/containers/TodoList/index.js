import React, { Component } from 'react';
import Header from './components/Header.js';
import './index.css';

class TodoList extends Component {
  state = {
    undoList: []
  };

  addUndoItem = (val) => {
    this.setState({
      undoList: [...this.state.undoList, val]
    });
  };

  render() {
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        {
          this.state.undoList.map((item, ind) => {
            return (
              <div key={ind}>{item}</div>
            );
          })
        }
      </div>
    );
  }
}

export default TodoList;
