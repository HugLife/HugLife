import React, { Component } from 'react';
import $ from 'jquery';

const raterStyle = {
  border: '2px solid gray'
}


class RateBartender extends Component {
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
      review: {}
    }
  }

  submitRating() {
    $('#ratebutton').show();
    $('#rater').hide();
  }



  componentDidMount() { 
    $('#rater').hide();
  }

  render() {

    return (
      <div style={raterStyle} id="rater">
        <h4>How would you rate {this.state.bartender.name}?</h4>
        <h6>Expertise</h6>
        <button>BOO</button>-----<button>OKAY</button>-----<button>AWESOME</button>
        <h6>Friendliness</h6>
        <button>BOO</button>-----<button>OKAY</button>-----<button>AWESOME</button>
        <h6>Speed</h6>
        <button>BOO</button>-----<button>OKAY</button>-----<button>AWESOME</button>

        <h5>Click Below To Sumbit</h5>
        <button onClick={this.submitRating}>Submit Rating</button>
      </div>


      
    )
  }
}

export default RateBartender;