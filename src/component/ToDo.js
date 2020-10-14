import React from 'react';

class ToDo extends React.Component{
    state={
        completed:this.props.task.completed
    }

    toggleCompleted = () =>{
        this.setState(prevState=>({
            completed:!prevState.completed
        }))
        //appelle la  fonction OnToglleCompleted pour afficher les tache executé
        this.props.onToglleCompleted(this.props.task.id)
    }
    render(){
        return( 
            //ComPonent pour l'affichage des tache
            <li className={`list-group-item d-flex align-tiems-center ${(this.state.completed)? 'bg-success': null}`}>
                {this.props.task.name}
                <button className={`btn btn-sm ml-auto  ${(this.state.completed)? 'btn-success':'btn-outline-success'}`} onClick={this.toggleCompleted}>&#x2713;</button>
            </li>
            // <button className={`btn btn-sm ml-auto  ${(this.state.completed)? 'btn-success':'btn-outline-success'}`} onClick={this.toggleCompleted}>&#x2713;</button>= <button className={"btn btn-sm ml-auto " + (this.state.completed? 'btn-success':'btn-outline-success')} onClick={this.toggleCompleted}>&#x2713;</button>
        )
    }
}

export default ToDo;