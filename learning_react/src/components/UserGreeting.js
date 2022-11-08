import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    //------------------------------------if else condition---------------------------------------------------------
    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Nidhi
    //         </div>
    //     )
    // }
    // else {
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }
    //---------------------------------------------element variables in if condition---------------------------------------------------
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome User</div>
    // }
    // else  {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //------------------------------------------conditional operator-----------------------------------------
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome User</div> :
    //     <div>Welcome Guest</div>
    // )
    //------------------------------------------conditional operator-----------------------------------------
    // return this.state.isLoggedIn && <div>Welcome User</div>
    return
  }
}

export default UserGreeting
