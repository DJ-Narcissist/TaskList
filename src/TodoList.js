import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [items, setItems] = useState([]);
    

    const addItem = (newItem) => {
            setItems([...items, newItem]);
    };

    const update = (id, updatedTask) => {
        setItems(items.map((item) => item.id === id ? {...item, task: updatedTask} : item));
    };
    



    const handleDelete = (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    const itemComponents = items.map(item => (
        <Todo 
        key={items.id}
        id ={item.id}
        task={item.task}
        item={item}
        update={update}
        remove={handleDelete}
        />
    ))
    
    
    return (
        <div>
            <NewTodoForm addItem={addItem} />
            {itemComponents}
        </div>    
    );
};
export default TodoList;