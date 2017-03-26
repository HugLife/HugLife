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
      id: props.bartender.id,
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
    this.setState({
      expertSelect: 'Thanks for voting 👍 on ' + this.state.bartender + '\'s Expertise!'
    });
    console.log(context.state.id);
    
    var data = {
      side: 'right',
      bartenderID: context.state.id,
      aspect: 'expert_right'
    };

   $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to expert_right');
      },
      error: function(err) {
        console.log(err);
      }
    });

    $('#expert').hide();
  }

  downvoteExpertise () { 
    var context = this;

    this.setState({
      expertSelect: 'Sorry you voted 👎 on ' + this.state.bartender + '\'s Expertise!'
    });

    var data = {
      side: 'left',
      bartenderID: context.state.id,
      aspect: 'expert_left'
    };

    $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to expert_left');
      },
      error: function(err) {
        console.log(err);
      }
    });

    $('#expert').hide();
  }


  upvoteFriendly () { 
    var context = this;
    this.setState({
      friendlySelect: 'Thanks for voting 👍 on ' + this.state.bartender + '\'s Friendliness!'
    });

    var data = {
      side: 'right',
      bartenderID: context.state.id,
      aspect: 'friendly_right'
    };

    $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to friendly_right');
      },
      error: function(err) {
        console.log(err);
      }

    });

    $('#friendly').hide();
  }

  downvoteFriendly () {
    var context = this;
    this.setState({
      friendlySelect: 'Sorry you voted 👎 on ' + this.state.bartender + '\'s Friendliness!'
    });

    var data = {
      side: 'left',
      bartenderID: context.state.id,
      aspect: 'friendly_left'
    };

    $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to friendly_left');
      },
      error: function(err) {
        console.log(err);
      }
    });

    $('#friendly').hide();
  }

  upvoteQuick () {
    var context = this;
    
    this.setState({
      quickSelect: 'Thanks for voting 👍 on ' + this.state.bartender + '\'s Speed!'
    });

    var data = {
      side: 'right',
      bartenderID: context.state.id,
      aspect: 'quick_right'
    };

    $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to quick_right');
      },
      error: function(err) {
        console.log(err);
      }
    });



    $('#quick').hide();
  }

  downvoteQuick () {
    var context = this;
    this.setState({
      quickSelect: 'Sorry you voted 👎 on ' + this.state.bartender + '\'s Speed!'
    });

    var data = {
      side: 'left',
      bartenderID: context.state.id,
      aspect: 'quick_left'
    };

    $.ajax({
      url: '/rate',
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'text/plain',
      success: function(result) {
        console.log('ADDED 1 to quick_left');
      },
      error: function(err) {
        console.log(err);
      }
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