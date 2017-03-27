import React, { Component } from 'react';
import $ from 'jquery';
import BartenderListItem from './BartenderListItem.jsx';
import Header from './Header.jsx';
import BartenderProfile from './BartenderProfile.jsx';

//Maybe the barprfile should be the first page, that way clicking on
//an element of the barlist could bubble up to the bar profile and change it
class BarProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: {
        id: 1,
        name: "Mikkeller Bar",
        opening_hours: {open_now: false},
        price_level: 2,
        rating: 4.5,
        vicinity: "34 Mason Street, San Francisco"
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


  //* Does not represent intetntion of Application refactor
  selectBartender() {
    $('#barprofilepage').hide();
    $('#bartenderprofilepage').show();
  }

  goToBarList (){
    $('#barprofilepage').hide();
    $('#barlistpage').show();
  }

  //Should query the database to find bartenders associated with the bar and map them

  render() {

    return (
      <div className='container' id="barprofilepage" onClick={this.selectBartender}>
        <Header />
        <button onClick={this.goToBarList} className='btn btn-info btn-lg'>GO BACK TO BAR LIST PAGE</button>
        <h1>{this.state.bar.name}</h1>
        <div id="barinfo" className='jumbrotron'>
          <p><strong>Open Now:</strong> {this.renderOpen(this.state.bar.opening_hours.open_now)}</p>
          <p><strong>Address:</strong> {this.state.bar.vicinity}</p>
          <p><strong>Price:</strong> {this.renderPrice(this.state.bar.price_level)} / 5</p>
          <p><strong>Google Rating:</strong> {this.renderStars(this.state.bar.rating)} / 5</p>
        </div>
        <h2>Our Bartenders</h2>
        <div id="bartenders" className='jumbotron'>
          
          {this.state.bartenders.map(bartender => <BartenderListItem onClick={this.selectBartender} calcRating={this.calculateRating} bartender={bartender} />)}

        </div>
      </div>


      
    )
  }
}

export default BarProfile;