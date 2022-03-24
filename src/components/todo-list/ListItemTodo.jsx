import { useState } from "react";
import { nanoid } from "nanoid";

const ListItemTodo = function(props){

    const {id, name, description, priority, urgent, isDone} = props
    const { onDone, onDelete } = props



    return(
        <div className={isDone ? "listItem stripes" : "listItem"}>
                <div className="left-container">
                    <div className="upper-container">
                        <h3>{name}</h3>
                        <p className={urgent ? "priority-item urgent" : "priority-item normal"}>
                            ({priority})
                        </p>
                    </div>
                    <div className="lower-container">
                        <p>{description}</p>
                    </div>
                    </div>
                    <div className="right-container">
                        <button className="done" onClick={() => onDone(id)}>
                            Terminer
                        </button>
                        <button className="delete" onClick={() => onDelete(id)}>
                            Supprimer
                        </button>
                    </div>
            </div>
            
    );
}

export default ListItemTodo