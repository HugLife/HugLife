import React from 'react';

const imgStyle = {
  height: '40px',
  width: '40px'
};

const BartenderListItem = (props) => (
  <div className="bartender">
    <img style={imgStyle} src="./pom.jpg" />
    <p><strong>Name:</strong> {props.bartender.name}</p>
    <p><strong>Rating:</strong> :):):):):) </p>
	<p>[rating will be based on overall calculation of all metrics?]</p>
  </div>
)

export default BartenderListItem;
