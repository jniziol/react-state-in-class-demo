import React, { Component } from 'react';
import Box from './Box'
import './App.css'

class App extends Component {
  state = {
    filter: "",
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

  updateFilter = (value) => {
    this.setState({
      filter: value
    })     
  }  

  render() {
    let shownBoxes;
    
    if(this.state.filter === '') {
      shownBoxes = this.state.boxes;
    } else {
      shownBoxes = this.state.boxes.filter((box) => {
        return box.number.toString().includes(this.state.filter)
      })
    }

    return (
      <div className="boxes">
        <input 
          type="text" 
          value={this.state.filter}
          onChange={(event) => this.updateFilter(event.target.value)}
        ></input>
        <button onClick={this.addNewBox}>Add New Box</button>
        {shownBoxes.map((box) => 
          <Box key={box.number} number={box.number} removeBox={this.removeBox}/>
        )}
      </div>
    );
  }
}

export default App;
