import { useState } from "react";
import ListItemTodo from "./ListItemTodo";

const ListTodo = function(props){
    const { tasks } = props
    const { onDelete } = props
    const { onDone } = props

    const tasksJSX = tasks.map(
        p => <ListItemTodo key={p.id}
                id={p.id}
                name={p.name}
                description={p.description}
                priority={p.priority}
                urgent={p.urgent}
                onDelete={(id) => onDelete(id)}
                isDone = {p.isDone}
                onDone={(id) => onDone(id)}>
                </ListItemTodo>
    )


    return(
        <div className="tasks-container">
            <h2>Liste des tâches</h2>  
            {tasksJSX}
        </div>
    )
}

export default ListTodo