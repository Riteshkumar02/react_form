import React, { Component } from 'react'

export default class ChildComp extends Component {
    btnHandeler=()=>{
        this.props.data("This is child to parent")
    }
  render() {
    return (
      <div>
        <button onClick={this.btnHandeler}>Display Message</button>
      </div>
    )
  }
}
