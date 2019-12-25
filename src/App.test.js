import React from 'react';
import { render } from '@testing-library/react';
import HomeComponent from './components/home';

test('Renders the Python Official Page', () => {
  const { getByText } = render(<HomeComponent />);
  const linkElement = getByText(/Python Official Portali/i);
  expect(linkElement).toBeInTheDocument();
});
