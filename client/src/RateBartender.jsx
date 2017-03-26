import React, { Component } from 'react';
import $ from 'jquery';

const raterStyle = {
  border: '2px solid gray'
}


class RateBartender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // note Maybe break up into separate objects
      bartender: 'Esteban Quito',
      reviewer: 'TEST',
      expert_right: 0,
      expert_left: 0,
      friendly_right: 0,
      friendly_left: 0,
      quick_right: 0,
      quick_left: 0,
      hot: false,
      hook: false,
    }
  }

  submitRating() {
    var context = this;
    $('#rater').hide();
    $('#ratingconf').show();
    $('#ratebutton').show();

    console.log(context.state);
    
  }

  selectMetric(selected, zero) {
    // set selected as 1
    // set zero as zero
  }

  componentDidMount() { 
    
  }

  displayStatus(right, left) {
    // if right !left 
      // return right
    // else left ! right 
      // return left
    // else 
      //return neither selected
    
  }

  render() {
    // TODO figure out a way to display currently selected thing (possible Radio buttons)
    return (
      <div style={raterStyle} id="rater">
        <h4>How would you rate {this.state.bartender.name}?</h4>

        <button>BOO</button>-----EXPERTISE-----<button>AWESOME</button><br />
        
        <button>BOO</button>-----FRIENDLINESS-----<button>AWESOME</button><br />
        
        <button>BOO</button>-----SPEED-----<button>AWESOME</button><br />

        <h5>Click Below To Sumbit</h5>
        <button onClick={this.submitRating.bind(this)}>Submit Rating</button>
      </div>

    )
  }
}

export default RateBartender;