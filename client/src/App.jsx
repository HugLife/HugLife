import React, { Component } from 'react';
import $ from 'jquery';
import BarProfile from './BarProfile.jsx';
import Header from './Header.jsx';
import BartenderProfile from './BartenderProfile.jsx';
import BarList from './BarList.jsx';

const divStyle = {
  display: 'inline-block',
  float: 'right',
  height: '400px',
  width: '400px',
  border: 'solid Black 2px'
};
const mapStyle = {
  height: '400px',
  width: '400px',
  border: 'solid Black 2px',
  backgroundImage: 'url(./loading-map.gif)',
  backgroundSize: '100%',
  backgroundPosition: 'center'

};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
  
    }
  }

  componentDidMount() { 

  }

  render() {

    return (
      <div>
        <BarList />
        <BarProfile />
        <BartenderProfile />
      </div>
    )
  }
}

export default App;