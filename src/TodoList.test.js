import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const addItem = (TodoList, task ="write tests") => {
    const taskInput = TodoList.getByLabelText("Task:");
    fireEvent.change(taskInput, { target: { value: task}});
    const submitButton = TodoList.getByText(" Add Task");
    fireEvent.click(submitButton);
}

it("renders without crashing", () => {
    render (<TodoList />);
});

it ("matches the snapshot", () => {
    const {  asFragment } = render (<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


it ("can add a task", () => {
    const list = render (<TodoList />);
    addItem(list);

    //expect form to clear and task should appear 
    expect(list.getByLabelText("Task:")).toHaveValue("");
    expect(list.getByText("write tests")).toBeInDocument();
    expect(list.getByText("Edit:")).toBeInDocument();
    expect(list.getByText("X")).toBeInDocument();
});

it ("can edit a task", () => {
    const list = render (<TodoList />);
    addItem(list);

    fireEvent.click(list.getByText("Edit"));
    const editInput = list.getAllByDisplayValue("write tests");
    fireEvent.change(editInput, {target: { value:"sleep" }});
    fireEvent.click(list.getByText("Update!"));

    //expect task show when edited
    expect(list.getByText("sleep")).toBeInDocument();
    expect(list.queryByText("write tests")).not.toBeInDocument();
});

it ("can delete a task", () => {
    const list = render (<TodoList />);
    addItem(list);

    fireEvent.click(list.getByText("X"));

    // Expect task to be deleted
    expect(list.queryByText("write tests")).not.toBeInDocument();
});



