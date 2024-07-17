import React, { useState } from 'react';
import NumberList from './components/NumberList';
import TriangleArea from './components/TriangleArea';

const App: React.FC = () => {
  const [maxNumber, setMaxNumber] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [base, setBase] = useState<string>('');

  const handleNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'cursive' }}>
      <div>
        <label>Max Number to Print</label>
        <input
          type="text"
          value={maxNumber}
          onChange={(e) => handleNumberInputChange(e, setMaxNumber)}
          style={{ display: 'block', margin: '10px 0' }}
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <div>The printed numbers</div>
        <NumberList maxNumber={parseInt(maxNumber) || 0} />
      </div>
      <div>
        <label>Height</label>
        <input
          type="text"
          value={height}
          onChange={(e) => handleNumberInputChange(e, setHeight)}
          style={{ display: 'inline-block', margin: '10px 20px 10px 0' }}
        />
        <label>Width</label>
        <input
          type="text"
          value={base}
          onChange={(e) => handleNumberInputChange(e, setBase)}
          style={{ display: 'inline-block', margin: '10px 0' }}
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <div>The calculated area is printed here</div>
        <TriangleArea base={parseInt(base) || 0} height={parseInt(height) || 0} />
      </div>
    </div>
  );
};

export default App;
