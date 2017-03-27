import React, { Component } from 'react';
import $ from 'jquery';
import BarProfile from './BarProfile.jsx';
import Header from './Header.jsx';
import BartenderProfile from './BartenderProfile.jsx';

const divStyle = {
  display: 'inline-block',
  float: 'left',
  width: '400px',
  height: '500px',
  marginRight: '20px'
};
const mapStyle = {
  display:'inline-block',
  height: '400px',
  width: '400px',
  border: 'solid Black 2px',
  backgroundImage: 'url(./loading-map.gif)',
  backgroundSize: '100%',
  backgroundPosition: 'center'

};

class BarList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home',
      value: '',
      bars: [{name: 'Please Wait for Geolocation to set in....', key: 1}],
      currentBar: [{name:'Tempest', key: 1}]
    }
  }

  handleChange(e) {
    this.setState ({
      value: e.target.value
    });
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
          zoom: 15
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

            $.ajax({
              url:'/barlist',
              data: JSON.stringify(results),
              type: 'POST',
              contentType: 'text/plain',
              success: function(){
                console.log('SENT TO SERVER');
              },
              error: function(err){
                console.log('ERR', err);
              }
            })
        }) 

      }, function(error){
        console.log(error);

      }, function(){

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7876, lng: -122.4001},
          zoom: 15
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


    $('#rater').hide();

  }


  //* Does not represent intetntion of Application refactor
  selectBar() {
    $('#barlistpage').hide();
    $('#barprofilepage').show();
  }

  goToLogin () {
    $('input').val('');
    $('#loginpage').show();
    $('#barlistpage').hide();
  }

  search() {
    var context = this;
    var address = this.state.value;

    var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.7876, lng: -122.4001},
          zoom: 15
        });

    var geocoder = new google.maps.Geocoder;

    geocoder.geocode({address: address}, function(results, status) {
      if (status === 'OK') {

        var pos = results[0].geometry.location;
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          label: 'X',
          position: pos
        })

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
              console.log(results);
              context.setState({
                bars: results
              });

              for (var i = 0; i < results.length; i++){
                addMarker(results[i]);
              }

            }
        }) 


      } else {
        console.log('not successful: ' + status)
      }
    })



    
  }

  //OnClick of a bar, the bar profile component should re render to show the information the bar that was clicked

  render() {

    return (
      <div className='container' id="barlistpage">
        <Header />
         <button onClick={this.goToLogin} className='btn btn-info btn-lg'>Logout</button>
        <div className='jumbotron'>
          <input type="text" placeholder="Please enter an address" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <button className='btn btn-primary' onClick={this.search.bind(this)}>Search Address</button> 
        </div>

        <div className='jumbotron' style={divStyle}>
          <h4>Bars Near You</h4>
          <ol>
            {this.state.bars.map(bar => <li onClick={this.selectBar} key={bar.id}>{bar.name}</li>)}
          </ol>
          </div>
        <div style={mapStyle} id="map">
        </div>
        <div>
          * Numbers on map correspond to numbers on list
          ** X on map is your current location
        </div>
      </div>
    )
  }
}

export default BarList;