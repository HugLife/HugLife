import React from 'react';

const legendStyle = {
  width: '300px',
  border: '2px solid'
};

const pStyle ={
  margin: '2px'
}

const Legend = (props) => (
  <div style={legendStyle} id="legend">
    <h4>What the Emojis Mean:</h4>
    <p>HOT ---- Hot Bartender</p>
    <p>HOOK ---- Get the Hookup </p>
    <p>[may need require an emoji library]</p>
  </div>
)

export default Legend;
