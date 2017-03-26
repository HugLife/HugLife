import React from 'react';

const imgStyle = {
  height: '40px',
  width: '40px'
};


const BartenderListItem = (props) => (
  <div className="bartender container">
    <img style={imgStyle} src="./pom.jpg" />
    <p><strong>Name:</strong> {props.bartender.name}</p>
    <p><strong>Rating:</strong>{props.calcRating(props.bartender)}  / 10</p>
  </div>
)

export default BartenderListItem;
