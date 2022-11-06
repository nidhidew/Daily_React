import React, { Component } from 'react'

class ClassClick extends Component {

  clickHandler(){
    console.log("button clicked form class");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click form class</button>
      </div>
    )
  }
}

export default ClassClick
