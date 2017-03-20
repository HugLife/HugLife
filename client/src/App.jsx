import React, { Component } from 'react';
import $ from 'jquery';

const divStyle = {
  display: 'inline-block',
  float: 'right'
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      value: 'Enter Bar',
      bars: [{name: 'Tempest', key: 1}, {name: 'Databases', key: 2}, {name: 'Ol\'McDonalds', key: 3}]
    }
  }

  handleChange(e) {
    this.setState ({
      value: e.target.value
    });
  }

  handleSubmit(value) {
    console.log(value);
    $.ajax({
      url: '/bars',
      type: 'POST',
      data: value,
      success: function (data) {
          console.log("this was a success.")
      },
      error: function () {
        console.log("we got a bug")
      }
    })
  }

  render() {

    return (
      <div>
        <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleSubmit(this.state.value)}>Add Bar</button> 
        </div>
        <div>
        <img src={'map.jpg'} style={divStyle} id="map" />
        <h4>Bar List</h4>
        {this.state.bars.map(bar => <li key={bar.key}>{bar.name}</li>)}
        </div>
      </div>
    )
  }
}

export default App;