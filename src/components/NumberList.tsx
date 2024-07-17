import React, { useState } from 'react';

interface NumberListProps {
  maxNumber: number;
}

const NumberList: React.FC<NumberListProps> = ({ maxNumber }) => {
  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
  return (
    <div>
      {numbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
};

export default NumberList;
