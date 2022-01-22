import { useState } from 'react';
import { Dropdown } from './Dropdown';

const options = [
  { label: 'Africaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'hidi', value: 'hi' },
];

export const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Text</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label='Select a language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};
