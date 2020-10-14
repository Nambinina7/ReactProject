import React from 'react';
import ToDo from './ToDo';
const ToDoList = ({tasks, match,onToglleCompleted}) =>{ 
    let filteredTasks
// function pour afficher les tache completed
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
            break;
    
        default:
            filteredTasks = tasks
        break;
// function pour afficher les tache completed            
    }
    
    if(filteredTasks.length === 0){
        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                   <li className="list-group-item">Aucune tâche à  afficher </li>
                </ul>
            </>
        )
        
    }
    else{
        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        //Boucle pour afficher les taches completed et les tache non fait
                        filteredTasks.map((task) => <ToDo task={task} key={task.id} onToglleCompleted={onToglleCompleted}/>)
                    }
                </ul>
            </>
        )
    }
}

export default ToDoList;