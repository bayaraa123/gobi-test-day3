import React, { useState, useEffect } from 'react';

export default function Button(props) {
  const [state, setState] = useState({
    color: 'white',
    textColor: 'black',
  });

  useEffect(() => {
    if (props.type === 'secondary') {
      setState({ ...state, color: 'black', textColor: 'white' });
    } else if (props.type === 'primary') {
      setState({ ...state, color: 'white', textColor: 'black' });
    } else setState({ ...state, color: '', textColor: '' });
  }, []);

  return (
    <button
      style={{ backgroundColor: `${state.color}`, color: `${state.textColor}` }}
      className="p-2 px-8 text-md2 rounded-[10px]"
    >
      {props.name}
    </button>
  );
}
