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
      page: 'home',
      value: 'Enter Bar',
      bars: [{name: 'Tempest', key: 1}, {name: 'Databases', key: 2}, {name: 'Ol\'McDonalds', key: 3}],
      currentBar: [{name:'Tempest', key: 1}]
    }
  }

  componentDidMount() { 


  }

  render() {

    return (
      <div>
<<<<<<< HEAD
        <Header />
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleSubmit(this.state.value)}>Add Bar</button> 
        </div>
        <div>
          <h4>Bars Near You</h4>
          <ol>
            {this.state.bars.map(bar => <li key={bar.id}>{bar.name}</li>)}
          </ol>
          </div>
        <div style={mapStyle} id="map">
        </div>
        * Numbers on map correspond to numbers on list
        ** X on map is your current location
 
=======
        <BarList />
        <BarProfile />
        <BartenderProfile />
>>>>>>> a5e8e71fe016f9e2693e6e5cbaac3aa2f8af3bd5
      </div>
    )
  }
}

export default App;