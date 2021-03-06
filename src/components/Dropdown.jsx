import React, { useState, useEffect, useRef } from 'react';

export const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });
    // cleanup function (detach/remove the eventlistener from the body element)
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []); // this useEffect only runs one time ([]), when we first render the component on the screen

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null; // null in React means: don't render anything
    }
    return (
      // each individual item
      <div
        key={option.value}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className='ui form'>
        <div className='field'>
          <label htmlFor='' className='label'>
            {label}
          </label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <div className='ui segment'>
        <p style={{ color: selected.value }}>This text is {selected.value}</p>
      </div>
    </div>
  );
};
