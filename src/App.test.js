import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Renders the Python Official Page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Python Inglizcha Portali/i);
  expect(linkElement).toBeInTheDocument();
});
