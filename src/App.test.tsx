import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Form from './ui/Form'
import userEvent from '@testing-library/user-event';

test('<App /> render <Main/> and <Footer/>', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toBeInTheDocument();
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
  const footerElement = screen.getByText(/2021/);
  expect(footerElement).toBeInTheDocument();
});

test('functionality of Form at <Main/>', async () => {
  const setState = jest.fn();
  render(<Form list={[{}]} setList={setState}/>);
  await userEvent.type(screen.getByRole('textbox'), 'Doing testing');
  expect(screen.getByRole('textbox')).toHaveValue('Doing testing');
  await userEvent.click(screen.getByRole('button'))
  expect(screen.getByRole('textbox')).toHaveValue('');
  expect(setState).toHaveBeenCalledTimes(1);
})