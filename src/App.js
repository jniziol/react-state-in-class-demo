import React, { Component } from 'react';
import Box from './Box'
import './App.css'

class App extends Component {
  state = {
    boxes: [
      {
        number: Math.random()
      },
      {
        number: Math.random()
      }
    ]
  }

  addNewBox = () => {
    this.setState((previousState) => ({
      boxes: [...previousState.boxes, {number: Math.random()}]
    }))
  }

  removeBox = (number) => {
    this.setState((previousState) => ({
      boxes: previousState.boxes.filter((box) => {
        return box.number !== number;
      })
    }))
  }

  render() {    
    return (
      <div className="boxes">
        <button onClick={this.addNewBox}>Add New Box</button>
        {this.state.boxes.map((box) => 
          <Box key={box.number} number={box.number} removeBox={this.removeBox}/>
        )}
      </div>
    );
  }
}

export default App;
