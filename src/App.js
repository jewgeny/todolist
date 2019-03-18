import React, { Component } from 'react';
import './App.css';
import Title from "./Components/Title";
import Form from "./Components/Form";
import Todos from "./Components/Todos";
import Menu from "./Components/Menu";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {taskName: "",
                  tasks: [],
                  counterTasks: 0,
                  showAllTasks: false,
                  taskText: "tasks"}
  }

  showTodos(ev){
    ev.preventDefault();

    if(!this.state.taskName){
      this.setState({showAllTasks: false})
    }
    else{

      let copyOfTaskTest = this.state.taskText;
      if(this.state.tasks.length < 1){
        copyOfTaskTest = "task";
      }
      else{
        copyOfTaskTest = "tasks";
      }

      this.setState({
        showAllTasks: true,
        tasks:[...this.state.tasks,
        this.state.taskName ],
        taskName: "",
        taskText: copyOfTaskTest,
        counterTasks: this.state.counterTasks +1
      })
    }

  }

  updateList(ev){
    this.setState({
       taskName: ev.target.value
    })
  }

  deleteTask(ev){
    let buttonIndex = ev.target.getAttribute("ident");
    let deleteTask = Object.assign([], this.state.tasks);
    deleteTask.splice(buttonIndex, 1);

    this.setState({
      tasks: deleteTask,
      counterTasks: this.state.counterTasks -1,
    })
  }

  changeText(ev){
    let buttonIndex = ev.target.getAttribute("ident");
    let elemText = document.querySelectorAll(".taskBox");
    elemText[buttonIndex].classList.toggle("textLineThrough");
  }

  deleteAllTasks(){
     this.setState({
       tasks: [],
       counterTasks: 0})
  }

  render() {
   console.log(this.state.tasks);
    return (
      <>
        <Title />
        <div className="container mx-auto">
          <Form showTodos={this.showTodos.bind(this)}
                updateList={this.updateList.bind(this)}
                taskName={this.state.taskName}
                  />
        {this.state.showAllTasks  && <div className="d-flex flex-column bg-white m-0">
               {this.state.tasks.length > 0 && <Menu
                                                  counterTasks={this.state.counterTasks}
                                                  deleteAllTasks={this.deleteAllTasks.bind(this)}
                                                  taskText={this.state.taskText} />}
               <Todos tasks={this.state.tasks}
                      deleteTask={this.deleteTask.bind(this)}
                      taskNum={this.state.taskNum}
                      changeText={this.changeText.bind(this)}
                />
            </div>
        }
        </div>
    </>
    );
  }
}

export default App;
