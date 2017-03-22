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

  searchMap (location) {
    
  }

  componentDidMount() { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

      var $img = $('img');
      var url = 'https://maps.googleapis.com/maps/api/staticmap?' +
                'key=AIzaSyBSJt0j19FiHBC4ExMsKCh7b7kujSNYImo' +
                '&center=' + pos.lat + ',' + pos.lng + '&zoom=15' +
                '&size=480x293';

      $img.attr('src', url);





      })
    } else {
          // $.ajax({
    //   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
    //   data:{
    //     key: 'AIzaSyDPnksoq1GqbY-SoDONZTHyj54ovde-2k8',
    //     location: '37.7876,-122.4001',
    //     radius: '500',
    //     type: 'bar',
    //     keyword: ''
    //   },
    //   contentType: 'jsonp',
    //   beforeSend: function (request) {
    //     request.setRequestHeader('Access-Control-Allow-Origin', '*');

    //   },
    //   success: function(data) {
    //     console.log(data);
    //   },
    //   error: function(error) {
    //     console.log(error);
    //   }

    // })
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
        <div id="map">
        </div>
      </div>
    )
  }
}

export default App;