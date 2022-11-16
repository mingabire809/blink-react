import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div style={{
        color: isDanger? 'red': 'black',
        background: 'white',
        width: 63,
        height: 63,
        borderRadius: 10
    }}>
      <h3>{value}</h3>
      <h5 style={{
        marginTop: -15
      }}>{type}</h5>
    </div>
  );
};

export default DateTimeDisplay;