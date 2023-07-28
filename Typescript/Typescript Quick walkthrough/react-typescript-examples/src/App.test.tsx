import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header of the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello! Welcome to Typescript world/i);
  expect(linkElement).toBeInTheDocument();
});
