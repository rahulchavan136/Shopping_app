// ButtonComponent.js
import React, { useState } from 'react';

const ButtonComponent = ({ children, onClick }) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    onClick();  
    setClickCount(clickCount + 1);  
  };

  return (
    <button onClick={handleClick}>
      {children} Clicked: {clickCount} times
    </button>
  );
};

export default ButtonComponent;
