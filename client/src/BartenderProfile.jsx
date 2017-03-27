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
        id: 6,
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
      }
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

  //*Not part of original intention, For presentation purposes onlny
  goToBarPage (){
    $('#barprofilepage').show();
    $('#bartenderprofilepage').hide();
  }
  goToLogin () {
    $('input').val('');
    $('#loginpage').show();
    $('#barlistpage').hide();
    $('#bartenderprofilepage').hide();
    $('#barprofilepage').hide();

  }

  //Should post to the databsae when the rating is done
  render() {

    return (
      <div className='container' id="bartenderprofilepage">
        <Header />
        <button onClick={this.goToLogin} className='btn btn-info btn-lg'>Logout</button>
        <button onClick={this.goToBarPage} className='btn btn-info btn-lg'>GO BACK TO BAR PROFILE PAGE</button>
        <h1>{this.state.bartender.name}</h1>
        <div id="bartenderinfo" className='jumbotron'>
          <p><strong>Expertise:</strong> {this.calcMetric(this.state.bartender.expert_left, this.state.bartender.expert_right, '🤹')} / 5</p>
          <p><strong>Friendliness:</strong> {this.calcMetric(this.state.bartender.friendly_left, this.state.bartender.friendly_right, '🤗')} / 5</p>
          <p><strong>Speed:</strong> {this.calcMetric(this.state.bartender.quick_left, this.state.bartender.quick_right, '💨')} / 5</p>
          <p><strong>Badges:</strong> {this.renderBadges()}</p>
        </div>
        <div className='jumbotron'>
          <h3>Message of the Day</h3>
          <p>{this.state.bartender.message}</p>
        </div>
        <button id="ratebutton" className='btn btn-info btn-lg' onClick={this.openRater}>CLICK TO RATE</button>
        <h4 id="ratingconf">Thanks for rating!</h4>
        <RateBartender bartender={this.state.bartender} />
        <Legend/ >
        <h3>Reviews</h3>
        <div className='jumbotron'>
          <p>FEATURE UNDER CONSTRUCTION; Check Back later!</p>
        </div>

      </div>


    
    )
  }
}

export default BartenderProfile;