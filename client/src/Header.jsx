import React from 'react';

const headerStyle = {
  height: '100px',
  width: '100%',
  border: '2px solid',
  backgroundImage: 'url(./bar.jpg)',
  textAlign: 'center',
  color: 'LawnGreen'
};

const Header = (props) => (
  <header style={headerStyle}>
    <h1>DRINK'D</h1>
    <h3>an app that raises the Bar</h3>
  </header>
)

export default Header;