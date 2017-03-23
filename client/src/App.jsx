import React, { Component } from 'react';
import $ from 'jquery';

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
      bars: [{name: 'Tempest', key: 1}]
    }
  }

  handleChange(e) {
    this.setState ({
      value: e.target.value
    });
  }

  handleSubmit() {
    $.ajax({
      url: '/bar',
      type: 'GET',
      data: this.state.value,
      success: function (data) {
          console.log(data);
          this.setState ({
            bars: data
          });
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
          types: ['bar'],
          rankBy: google.maps.places.RankBy.DISTANCE


        }, function(results, status, pagination) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log('error')
              return;
            } else {

            function addMarker(place) {
              var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              label: '' + (i + 1)
            });
            }

            function addHome(place) {
              var marker = new google.maps.Marker({
              map: map,
              position: place,
              label: {text: 'X', labelColor: 'green'}

            });
            }
              console.log(results);
              context.setState({
                bars: results
              });

              

              for (var i = 0; i < results.length; i++){
                addMarker(results[i]);
              }

              addHome(pos);

            }
        }) 
      }, function(){
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7876, lng: -122.4001},
          zoom: 17
        });

         var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: {lat: 37.7876, lng: -122.4001},
          types: ['bar'],
          rankBy: google.maps.places.RankBy.DISTANCE


        }, function(results, status, pagination) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
              console.log('error')
              return;
            } else {

            function addMarker(place) {
              var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              label: '' + (i + 1)
            });
            }

            function addHome(place) {
              var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location,
              label: 'X',
              labelColor: 'green'
            });
            }
              console.log(results);
              context.setState({
                bars: results
              });

              for (var i = 0; i < results.length; i++){
                addMarker(results[i]);
              }

            }
        }) 
        alert('GEOLOCATION ACCESS DENIED: LOCATION DEFAULTED TO HACK REACTOR SF');
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
          <button onClick={this.handleSubmit.bind(this)}>Find Bar</button> 
        </div>
        <div>
          <h4>Bar List</h4>
          <ol>
            {this.state.bars.map(bar => <li key={bar.id}>{bar.name}</li>)}
          </ol>
          </div>
        <div style={mapStyle} id="map">
        </div>
      </div>
    )
  }
}

export default App;