import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form to add a task', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Task/i);
  expect(buttonElement).toBeInTheDocument();
});
