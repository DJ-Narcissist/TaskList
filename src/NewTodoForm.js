import React, { useState} from "react";
import { v4 as uuid } from "uuid";
import Todo from "./TodoList";

const NewTodoForm = () => {
    const [formData, setFormData] = useState({

    });

    
    

    const gatherInput = (e) => {
        e.preventDefault();
        addItem({ ...formData, id: uuid() });
        setFormData({item:"", value:""})
    };



    return (
        <form onSubmit={gatherInput}>
            <label htmlFor="key">
                Task:
                <input
                type="text"
                name={task}
                value={formData.key}
                onChange={handleChange}
                />

            </label>
           
        </form>
        
    );
}

export default NewTodoForm;