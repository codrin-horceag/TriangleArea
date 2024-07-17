import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TriangleArea from '../components/TriangleArea';
import { calculateTriangleArea } from '../utils/math';

test('calculates and displays the area of a triangle', () => {
  const base = 10;
  const height = 5;
  const area = calculateTriangleArea(base, height);
  const { getByText } = render(<TriangleArea base={base} height={height} />);
  expect(getByText(`Area of the triangle: ${area}`)).toBeInTheDocument();
});

test('displays zero area for zero base or height', () => {
  const { getByText } = render(<TriangleArea base={0} height={0} />);
  expect(getByText('Area of the triangle: 0')).toBeInTheDocument();
});

test('displays zero area for empty base or height input', () => {
  const { getByText } = render(<TriangleArea base={NaN} height={NaN} />);
  expect(getByText('Area of the triangle: 0')).toBeInTheDocument();
});
