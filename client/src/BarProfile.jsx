import React, { Component } from 'react';
import $ from 'jquery';
import BartenderListItem from './BartenderListItem.jsx';


class BarProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: {
        name: "Inner Fog",
        opening_hours: {open_now: true},
        price_level: 2,
        rating: 4.4,
        vicinity: "545 Irving Street, San Francisco"
      },
      bartenders: [1,2,3,4,5]
    }
  }

  renderStars(rating) {
    var adjRate = Math.ceil(rating);
    var stars = ''
    for (var i = 1; i <= adjRate; i++){
      stars += '*'
    }

    return stars;
  }

  renderPrice(price) {
    var dollars = '';
    for (var i = 1; i <= price; i++){
      dollars += '$'
    }

    return dollars;
  }

  renderOpen(status) {
    if (status === true) {
      return 'YES';
    } else {
      return 'NO';
    }
  }

  renderListItems () {
    if (this.state.bartenders.length === 0) {
      $('#bartenders').append('<p>*NO BARTENDERS ARE REGISTERED HERE</p>')
    }
  }

  componentDidMount() { 
 
  }
  render() {

    return (
      <div>
        <h1>{this.state.bar.name}</h1>
        <div id="barinfo">
          <p><strong>Open Now:</strong> {this.renderOpen(this.state.bar.opening_hours.open_now)}</p>
          <p><strong>Address:</strong> {this.state.bar.vicinity}</p>
          <p><strong>Price:</strong> {this.renderPrice(this.state.bar.price_level)}</p>
          <p><strong>Google Rating:</strong> {this.renderStars(this.state.bar.rating)}</p>
        </div>
        <h2>Our Bartenders</h2>
        <div id="bartenders">
          {this.state.bartenders.map(bartender => <BartenderListItem />)}
        </div>
      </div>


      
    )
  }
}

export default BarProfile;