import React from 'react';

const legendStyle = {
  width: '350px',
  border: '2px solid'
};

const pStyle ={
  margin: '2px'
}

const Legend = (props) => (
  <div style={legendStyle} id="legend" className='container'>
    <h4>Badge Key</h4>
    <p>🌶  ---- Hot Bartender</p>
    <p>🎣  ---- Bartender will hook you up (with free drinks)</p>
  </div>
)

export default Legend;
