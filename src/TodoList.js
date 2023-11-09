import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [inputvalue, setInputValue] = useState('');

    const addItem = (newItem) => {
        if (inputvalue){
            setItems([...items, setInputValue]);
            setInputValue('');

        }
    };

    const handleDelete = (id) => {
        const updatedItems = items.filter((item, i) => i !== id);
        setItems(updatedItems);
    };

    const itemComponents = items.map(item => (
        <Todo 
        key={items.id}

        
        />
    ))
    
    
    return (
        <div>
            <NewTodoForm addItem={addItem} />
            {items.map((item) => (
                
            ))}
        </div>    
    );
};
export default TodoList;