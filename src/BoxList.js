import React from 'react'
import Box from './Box'

class BoxList extends React.Component {
  render() {
    return(
      <div className="box">
        {this.props.boxes.map((box) => 
          <Box key={box.number} number={box.number} />
        )}
      </div>
    )
  }

}

export default BoxList