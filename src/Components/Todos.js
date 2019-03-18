import React, {Component} from "react";

class Todos extends Component{
  render(){
    return(
       <>
         <div className="d-flex flex-column">
            {this.props.tasks.map((elem, index) => {
               return(
              <React.Fragment key={index} >
                 <div className="d-flex">
                      <div className="input-group-prepend">
                        <div className="input-group-text bg-white border-0 sizeBox">
                          <span className="mr-3">Task #{index +1}</span>
                          <input ident={index} onClick={this.props.changeText} className="" type="checkbox" />
                        </div>
                      </div>
                      <span identtext={index} className="taskBox border-0 bg-white input-group-text">{elem}</span>
                      <span ident={index} onClick={this.props.deleteTask} className="float-right deleteButton mx-3">&times;</span>
                </div>
               <hr className="hrTask"/>
              </React.Fragment>
               )
            })}
         </div>
       </>
    )
  }
}

export default Todos;
