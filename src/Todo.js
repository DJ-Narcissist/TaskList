import React, { useState } from "react";

const Todo = ({ task = "default todo", id = "1", remove, update}) => {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = e => {
        setEditTask(e.target.value);
    };

    const handleDelete = () => remove(id);

    const handleUpdate = e => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

    //Default view
    let jsx = (
        <div>
            <li>{task}</li>
            <button onClick={toggleEdit}>edit</button>
            <button onClick={handleDelete}>
                X
            </button>

        </div>
    );

    //View after edits

    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input 
                    type="text"
                    value={editTask}
                    onChange={handleChange}
                    />
                    <button>Update!!!</button>
                </form>
            </div>
        );
    };
    return jsx;
};

export default Todo;