import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';  
import '@testing-library/jest-dom';
import App from './App';


describe("Testing Todo App", () => {

  test('Testing if render all elements.', () => {

    render(<App />);

    const taskLabel = screen.getByTestId("task-label");
    const taskInputText = screen.getByTestId("task-input");
    const taskInputButton = screen.getByTestId("task-input-button");
    const taskTitle = screen.getByTestId("task-title");
    const taskList = screen.getByTestId("task-list");

    expect(taskLabel).toBeInTheDocument();
    expect(taskLabel).toHaveTextContent('Task:');
    expect(taskInputText).toBeInTheDocument();
    expect(taskInputText).toHaveAttribute('type', 'text');
    expect(taskInputButton).toBeInTheDocument();
    expect(taskInputButton).toHaveAttribute('type', 'button');
    expect(taskInputButton).toHaveValue("Add Todo");
    expect(taskTitle).toBeInTheDocument();
    expect(taskTitle).toHaveTextContent('Todos');
    expect(taskList).toBeInTheDocument();
  });


  test("Testing Todo List", async () => {
    render(<App />);
    const taskInputText = await screen.findByTestId("task-input");
    const taskInputButton = await screen.findByTestId("task-input-button");

    userEvent.type(taskInputText, "Testar a aplicação");
    userEvent.click(taskInputButton);

    expect(taskInputText).toHaveValue("");
    expect(await screen.findByTestId(`task-element`)).toBeInTheDocument();
    expect(await screen.findByTestId(`task-element`)).toHaveTextContent("Testar a aplicação");

  });

});
