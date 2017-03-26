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
      bartender: props.bartender.name,
      reviewer: 'TEST',
      expert_right: 0,
      expert_left: 0,
      friendly_right: 0,
      friendly_left: 0,
      quick_right: 0,
      quick_left: 0,
      hot: false,
      hook: false,
      expertSelect: 'Please click BOO or AWESOME to rate this Metric',
      friendlySelect: 'Please click BOO or AWESOME to rate this Metric',
      quickSelect: 'Please click BOO or AWESOME to rate this Metric',

    }
  }

  submitRating() {
    var context = this;
    $('#rater').hide();
    $('#ratingconf').show();
    $('#ratebutton').show();
    $('#friendly').show();
    $('#quick').show();
    $('#expert').show();

    this.setState({
      expertSelect: 'Please click BOO or AWESOME to rate this Metric',
      friendlySelect: 'Please click BOO or AWESOME to rate this Metric',
      quickSelect: 'Please click BOO or AWESOME to rate this Metric',
    });

    console.log(context.state);
    
  }

  upvoteExpertise () {
    var context = this;
    context.setState({
      expertSelect: 'Thanks for voting 👍 on ' + context.state.bartender + '\'s Expertise!'
    });

    $('#expert').hide();
  }

  downvoteExpertise () {
    var context = this;
    context.setState({
      expertSelect: 'Sorry you voted 👎 on ' + context.state.bartender + '\'s Expertise!'
    });

    $('#expert').hide();
  }


  upvoteFriendly () {
    var context = this;
    context.setState({
      friendlySelect: 'Thanks for voting 👍 on ' + context.state.bartender + '\'s Friendliness!'
    });

    $('#friendly').hide();
  }

  downvoteFriendly () {
    var context = this;
    context.setState({
      friendlySelect: 'Sorry you voted 👎 on ' + context.state.bartender + '\'s Friendliness!'
    });

    $('#friendly').hide();
  }

  upvoteQuick () {
    var context = this;
    context.setState({
      quickSelect: 'Thanks for voting 👍 on ' + context.state.bartender + '\'s Speed!'
    });

    $('#quick').hide();
  }

  downvoteQuick () {
    var context = this;
    context.setState({
      quickSelect: 'Sorry you voted 👎 on ' + context.state.bartender + '\'s Speed!'
    });

    $('#quick').hide();
  }
  componentDidMount() { 
    
  }


  render() {
    // TODO figure out a way to display currently selected thing (possible Radio buttons)
    return (
      <div style={raterStyle} id="rater">
        <h4>How would you rate {this.state.bartender.name}?</h4>
        <span>{this.state.expertSelect}</span><br />
        <div id="expert"> 
          <button onClick={this.downvoteExpertise.bind(this)}>👎</button>-----EXPERTISE-----<button onClick={this.upvoteExpertise.bind(this)}>👍</button><br />
        </div>
        <span>{this.state.friendlySelect}</span><br />
        <div id="friendly"> 
          <button onClick={this.downvoteFriendly.bind(this)}>👎</button>-----FRIENDLINESS-----<button onClick={this.upvoteFriendly.bind(this)}>👍</button><br />
        </div>
        <span>{this.state.quickSelect}</span><br />
        <div id="quick">
          <button onClick={this.downvoteQuick.bind(this)}>👎</button>-----SPEED-----<button onClick={this.upvoteQuick.bind(this)}>👍</button><br />
        </div>
        <h5>Click Below To Sumbit</h5>
        <button onClick={this.submitRating.bind(this)}>Submit Rating</button>
      </div>

    )
  }
}

export default RateBartender;