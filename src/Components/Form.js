import React, {Component} from "react";

class Form extends Component{
   render(){
     return(
      <form onSubmit={this.props.showTodos}>
       <div className="input-group mb-3">
          <input onChange={this.props.updateList} value={this.props.taskName} type="text" className="form-control" placeholder="Type here a task" />
          <div className="input-group-append">
            <button className="btn btn-success px-4">Enter</button>
          </div>
        </div>
      </form>
     )
   }
}

export default Form;
