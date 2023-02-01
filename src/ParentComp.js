import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    Handeler=(msg)=>{
        // this.props.data("This to parent")
        console.log("fun called")
        console.log(msg)
    }
  render() {
    return (
      <div>
<ChildComp data={this.Handeler}>
<h4>{this.msg}</h4>

</ChildComp>     
 </div>
    )
  }
}
