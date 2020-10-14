import React from 'react';
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import initialData from "../initialData";
import uniqueid from 'uniqueid';
import Fetching from './Fetching'

class App extends React.Component{
    state={
        tasks:[],
        fetching: true
    }

    componentDidMount = () => {
        let delay = Math.floor(Math.random()*5000)

        setTimeout(() =>{
            this.setState({
                fetching: false,
                tasks: initialData
            })
        },delay)
    }

    //fonction pour le changement  d'etat de tache new a tache completed
    onToglleCompleted = (taskId)=>{
        let tasktoUpdate = this.state.tasks.find(task =>task.id === taskId)
        tasktoUpdate.completed = !tasktoUpdate.completed

        //changement d'etat de state
        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ? tasktoUpdate :task
            })
        ))
    }
    //fonction pour ajouter un tache
    onAddTask = (newTaskName) => {
        let newTask = {
            id: uniqueid(),
            name: newTaskName,
            completed: false
        }
        this.setState(prevState => ({
            tasks: [...prevState.tasks,newTask]
        }))
    }

    //fonction pour efface un tache fait
    oneDeleteCompleted = () => {
        this.setState(prevState =>{
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
    }

    render(){
        return(
 //Route et  appell des props <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData}/>}/>
            <section id="todo">
                {this.state.fetching? <Fetching/> : ''}
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" render={(props) => <AddTask {...props}  onAddTask={this.onAddTask}/>}/>
                        <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToglleCompleted={this.onToglleCompleted}/>}/>
                    </Switch>
                    <NavBar oneDeleteCompleted={this.oneDeleteCompleted}/>
                </BrowserRouter>
            </section>
        )
    }
}

export default App;