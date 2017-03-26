import React, { Component } from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import Legend from './Legend.jsx';
import Message from './Message.jsx';
import RateBartender from './RateBartender.jsx';




class BartenderProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bartender: {
        name: 'Esteban Quito',
        bar_id: 1,
        expert_right: 15,
        expert_left: 3,
        friendly_right: 2,
        friendly_left: 17,
        quick_right: 2,
        quick_left: 7,
        hot: true,
        hook: true,
        message: 'Come See Me at the Bar Tonight, I\'ll get you Drunk!'
      },
      reviews: [] // you can probably source from reviews Schema
    }
  }

  calcMetric(left, right, emoji) {
    var total = left + right;
    var ratio = Math.ceil((right / total) * 5);
    var rating = '';

    for (var i = 1; i <= ratio; i++) {
      rating += emoji + ' ';
    }

    return rating;
  }

  renderBadges() {
    var badges = '';

    if (this.state.bartender.hot === true) {
      badges += '🌶 '
    }

    if (this.state.bartender.hook === true) {
      badges += '🎣 '
    }

    return badges;
  }

  openRater() {
    $('#ratebutton').hide();
    $('#rater').show();
    $('#ratingconf').hide();
  }



  componentDidMount() { 
    
  }

  render() {

    return (
      <div>
        <Header />
        <h1>{this.state.bartender.name}</h1>
        <div id="bartenderinfo">
          <p><strong>Expertise:</strong> {this.calcMetric(this.state.bartender.expert_left, this.state.bartender.expert_right, '🤹')} / 5</p>
          <p><strong>Friendliness:</strong> {this.calcMetric(this.state.bartender.friendly_left, this.state.bartender.friendly_right, '🤗')} / 5</p>
          <p><strong>Speed:</strong> {this.calcMetric(this.state.bartender.quick_left, this.state.bartender.quick_right, '💨')} / 5</p>
          <p><strong>Badges:</strong> {this.renderBadges()}</p>
        </div>
        <div>
          <h3>Message of the Day</h3>
          <p>{this.state.bartender.message}</p>
        </div>
        <button id="ratebutton" onClick={this.openRater}>CLICK TO RATE</button>
        <h4 id="ratingconf">Thanks for rating!</h4>
        <RateBartender />
        <Legend/ >
        <h3>Reviews</h3>
        <div>
          <p>POSSIBLY MAKE REVIEWS FEED HERE</p>
        </div>

      </div>


      
    )
  }
}

export default BartenderProfile;