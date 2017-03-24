import React, { Component } from 'react';
import $ from 'jquery';
import BartenderListItem from './BartenderListItem.jsx';
import Header from './Header.jsx';
import Legend from './Legend.jsx';



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
      reviews: []
    }
  }

  calcMetric(left, right, emoji) {
    var total = left + right;
    var ratio = Math.ceil((right / total) * 5);
    var rating = '';

    for (var i = 1; i <= ratio; i++) {
      rating += emoji;
    }

    return rating;
  }



  componentDidMount() { 

  }

  render() {

    return (
      <div>
        <Header />
        <h1>{this.state.bartender.name}</h1>
        <div id="bartenderinfo">
          <p><strong>Expertise:</strong> {this.calcMetric(this.state.bartender.expert_left, this.state.bartender.expert_right, 'X')}</p>
          <p><strong>Friendliness:</strong> {this.calcMetric(this.state.bartender.friendly_left, this.state.bartender.friendly_right, 'F')}</p>
          <p><strong>Speed:</strong> {this.calcMetric(this.state.bartender.quick_left, this.state.bartender.quick_right, 'S')}</p>
          <p><strong>Badges:</strong> ADD BADGES HERE</p>
        </div>
        <h3>Message of the Day</h3>
        <div id="message">
          <p>MAKE A MESSAGE COMPONENT HERE</p>
        </div>
        <button>CLICK TO RATE</button>
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