import React, {Component} from "react";

class Menu extends Component{
   render(){
     return(
       <div className="d-flex align-items-center my-3">
         <span className="tasks mx-3">{this.props.counterTasks} {this.props.taskText}</span>
         <button onClick={this.props.deleteAllTasks} className="btn border border-secondary ">Delete all tasks</button>
       </div>
     )
   }
}

export default Menu;
