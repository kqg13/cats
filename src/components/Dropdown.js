import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({label, options, selected, onSelectedChange, onSelectedValueChange}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); // gets ref to top level <div />

  useEffect(() => {
    const onBodyClick = e => {
      // body event listener should not do anything if we're inside the component
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick);
    // cleanup to remove eventListener: called right before the _next_ time useEffect is called
    return () => {
      document.body.removeEventListener('click', onBodyClick)
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value || !option.value) {
      return null;
    }

    const onDropDownChange = e => {
      onSelectedChange(option);
      if (option.value) {
        onSelectedValueChange(option.value);
      }
    }

    return (
      <div key={option.value} className="item" onClick={onDropDownChange}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div
            className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
