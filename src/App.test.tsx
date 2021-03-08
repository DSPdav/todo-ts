import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('<App /> render <Main/> and <Footer/>', () => {
  render(<App />);
  const mainElement = screen.getByTestId('main');
  expect(mainElement).toBeInTheDocument();
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
