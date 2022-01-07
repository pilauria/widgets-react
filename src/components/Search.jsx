import { useState } from 'react';

export const Search = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            type='text'
            className='input'
          />
        </div>
      </div>
    </div>
  );
};
