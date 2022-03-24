import { nanoid } from "nanoid";
import { useState } from "react";

//Name Product INPUT + Description Product TEXT AREA + Priority SELECT

const FormTodo = function (props) {
    // Props
    const { onSubmit } = props

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Normal');
    const [urgent, setUrgent] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tache = {
            id: nanoid(),
            name: name,
            description: description,
            priority: priority,
            urgent: urgent
        }
        onSubmit(tache)
    }

    return (
        <div className="form-todo">
            <h1>To Do List</h1>
            <form action="" onSubmit={handleSubmit}>
                <h2>Ajouter une nouvelle tâche</h2>
                <div className="form-container">
                    <label htmlFor="name">Tâche</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-container">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="form-container" id="priority" >
                    <div className="priority-select">
                        <label htmlFor="priority">Priorité</label>
                        <select name="" value={priority} onChange={(e) => setPriority(e.target.value)}>
                            <option value="Normal" onChange={(e) => setUrgent(false)}>Normal</option>
                            <option value="Peut attendre" onChange={(e) => setUrgent(false)}>Peut attendre</option>
                            <option value="Urgent" onChange={(e) => setUrgent(true)}>Urgent</option>
                            <option value="TRÈS URGENT!" onChange={(e) => setUrgent(true)}>TRÈS URGENT!</option>
                        </select>
                    </div>
                    <input type="submit" name="" id="" value="Ajouter"/> 
                </div>
            </form>
        </div>
    );

}

export default FormTodo