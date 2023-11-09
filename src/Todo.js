import React from "react";

const Todo = ({ item, handleDelete}) => {
    const handleRemove = () => {
        handleDelete(item.id);
    };

    return (
        <div>
            <span>{item.task}</span>
            <button onClick={handleRemove}>
                X
            </button>
        </div>
    );
};

export default Todo;