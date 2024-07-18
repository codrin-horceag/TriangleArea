import React from 'react';
import { calculateTriangleArea } from '../utils/math';

interface TriangleAreaProps {
  base: number;
  height: number;
}

const TriangleArea: React.FC<TriangleAreaProps> = ({ base, height }) => {
  const validBase = isNaN(base) ? 0 : base;
  const validHeight = isNaN(height) ? 0 : height;
  const area = calculateTriangleArea(validBase, validHeight);
  return <div>Area of the triangle: {area}</div>;
};

export default TriangleArea;
