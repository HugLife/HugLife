import React from 'react';

const legendStyle = {
  width: '300px',
  border: '2px solid'
};

const pStyle ={
  margin: '2px'
}

const Legend = (props) => (
  <div style={legendStyle}>
    <h4>What the Emojis Mean:</h4>
    <p>(Insert Chili Pepper Here) ---- Hot Bartender</p>
    <p>(Insert Hook Here) ---- Get the Hookup </p>
    <p>[may need require an emoji library]</p>
  </div>
)

export default Legend;
