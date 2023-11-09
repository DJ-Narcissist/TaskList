import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", () => {
    render (<NewTodoForm />);
});

it("matches the snapshot",() => {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("runs the create function on submit", () => {
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm addItem={createMock} />);
    const createButton = getByText("Add Task");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});
