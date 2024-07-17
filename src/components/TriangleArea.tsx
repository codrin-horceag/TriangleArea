import React from 'react';

interface TriangleAreaProps {
  base: number;
  height: number;
}

const TriangleArea: React.FC<TriangleAreaProps> = ({ base, height }) => {
  const area = (base * height) / 2;
  return <div>Area of the triangle: {area}</div>;
};

export default TriangleArea;
