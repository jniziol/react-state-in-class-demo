import React from 'react'

class Box extends React.Component {
  render() {
    return(
      <div className="box" onClick={() => {this.props.removeBox(this.props.number)}} >
        {this.props.number}
      </div>
    )
  }

}

export default Box