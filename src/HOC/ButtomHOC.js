 import React from 'react';

const ButtonHOC = (WrappedComponent) => {
  return (props) => {
     return (
      <div style={{border: "2px solid grey", borderRadius: 20}}>
        <WrappedComponent {...props} />
         <p>Additional content from HOC</p>
      </div>
    );
  };
};

export default ButtonHOC;
