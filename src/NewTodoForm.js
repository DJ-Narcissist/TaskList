// NewTodoForm.js
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addItem }) => {
    const [formData, setFormData] = useState({
        task: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const gatherInput = (e) => {
        e.preventDefault();
        addItem({ ...formData, id: uuid() });
        setFormData({ task: "" });
    };

    return (
        <form onSubmit={gatherInput}>
            <label htmlFor="key">
                Task:
                <input
                type="text"
                name="task"
                value={formData.task}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodoForm;
