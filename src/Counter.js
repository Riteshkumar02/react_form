import React, { Component } from 'react'

export class Counter extends Component {
  //  val=0
   constructor(){
    super()
      this.state={
        val:0
  
    }
   }

    inc = ()=>{
//  console.log("Clicked") 
  // let ele=document.getElementsByTagName("h1")[0];
  // this.val=this.val+1;
  // ele.innerHTML=this.val
  this.setState({val:this.state.val+1})


    }
  render() {
    // let val=0

    return (
      <div>
        <h1>{this.state.val}</h1>
      <button onClick={this.inc}>+</button>
      <button>-</button>
      </div>
    )
  }
}

export default Counter