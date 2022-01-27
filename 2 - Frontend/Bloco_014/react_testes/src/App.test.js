import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';


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
