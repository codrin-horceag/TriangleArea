import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NumberList from '../components/NumberList';

test('renders numbers up to the max number', () => {
  const { getByText } = render(<NumberList maxNumber={5} />);
  for (let i = 1; i <= 5; i++) {
    expect(getByText(i.toString())).toBeInTheDocument();
  }
});

test('does not render any numbers when max number is zero', () => {
  const { container } = render(<NumberList maxNumber={0} />);
  expect(container.firstChild).toBeEmptyDOMElement();
});

test('renders nothing when input is empty', () => {
  const { container } = render(<NumberList maxNumber={NaN} />);
  expect(container.firstChild).toBeEmptyDOMElement();
});
