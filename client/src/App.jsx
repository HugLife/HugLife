import React, { Component } from 'react';
import $ from 'jquery';

const divStyle = {
  display: 'inline-block',
  float: 'right',
  height: '400px',
  width: '400px',
  border: 'solid Black px'
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

  searchMap (location) {
    
  }

  componentDidMount() { 
    var context = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
   
        var map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 17
        });

        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pos,
          radius: 500,
          type: ['bar'],

        }, function(results, status, pagination) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log('error')
              return
            } else {
              context.setState({
                bars: results
              });

            }
        })



      })
    } else {
      // do nothing
    }


  }
  render() {

    return (
      <div>
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleSubmit(this.state.value)}>Add Bar</button> 
        </div>
        <div>
          <img src={'map.jpg'} style={divStyle}/>
          <h4>Bar List</h4>
          {this.state.bars.map(bar => <li key={bar.key}>{bar.name}</li>)}
          </div>
        <div style={divStyle} id="map">
        </div>
      </div>
    )
  }
}

export default App;