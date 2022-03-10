import React, { Component } from 'react';

class Header extends Component {
  state = {
    value: ''
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleInputKeyUp = (e) => {
    if (e.keyCode === 13 && this.state.value.trim()) {
      this.props.addUndoItem(this.state.value.trim());
      this.setState({
        value: ''
      });  
    }
  };

  render() {
    return (
      <div className="header">
        <div className="header-content">
          <span className="header-text">TodoList</span>
          <input
            className="input-box"
            placeholder="Todo"
            data-test="input-box"
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleInputKeyUp}
          />
        </div>
      </div>
    );
  }
}

export default Header;
