import React, { Component } from 'react';
import $ from 'jquery';
import BartenderListItem from './BartenderListItem.jsx';
import Header from './Header.jsx';


class BarProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: {
        id: 1,
        name: "Inner Fog",
        opening_hours: {open_now: true},
        price_level: 2,
        rating: 4.4,
        vicinity: "545 Irving Street, San Francisco"
      },
      bartenders: [{name: 'Todd'}, {name: 'Sam'}, {name: 'Ryan'}, {name: 'Greg'}, {name: 'Not Martin'},]
    }
  }

  renderStars(rating) {
    var adjRate = Math.ceil(rating);
    var stars = ''
    for (var i = 1; i <= adjRate; i++){
      stars += '🌟 '
    }

    return stars;
  }

  renderPrice(price) {
    var dollars = '';
    for (var i = 1; i <= price; i++){
      dollars += '💵 '
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

  calculateRating (bartender) {
    var lefts = bartender.friendly_left + bartender.quick_left + bartender.expert_left;
    var rights = bartender.friendly_right + bartender.quick_right + bartender.expert_right;
    var total = lefts + rights;

    var starCount = Math.ceil((rights / total) * 10);
    var string = '';

    for (var i = 1; i <= starCount; i++){
      string += '⭐ ';
    }

    return string;
  }

  componentDidMount() { 
    var context = this;
    console.log('mounted profile')
    $.ajax({
      url: '/bartenderlist',
      type: 'POST',
      data: JSON.stringify(1),
      contentType: 'text/plain',
      success: function(result) {
        context.setState({
            bartenders: result
          })
      },
      error: function(err) {
        console.log(err);
      }

    })
  }

  render() {

    return (
      <div className='container'>
        <Header />
        <h1>{this.state.bar.name}</h1>
        <div id="barinfo" className='jumbrotron'>
          <p><strong>Open Now:</strong> {this.renderOpen(this.state.bar.opening_hours.open_now)}</p>
          <p><strong>Address:</strong> {this.state.bar.vicinity}</p>
          <p><strong>Price:</strong> {this.renderPrice(this.state.bar.price_level)} / 5</p>
          <p><strong>Google Rating:</strong> {this.renderStars(this.state.bar.rating)} / 5</p>
        </div>
        <h2>Our Bartenders</h2>
        <div id="bartenders" className='jumbotron'>
          {this.state.bartenders.map(bartender => <BartenderListItem calcRating={this.calculateRating} bartender={bartender} />)}
        </div>
      </div>


      
    )
  }
}

export default BarProfile;