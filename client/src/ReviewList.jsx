import React, { Component } from 'react';
import $ from 'jquery';

class ReviewList extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		reviews: [
  		'Esteban is awesome! Totally hooked me up',
  		'This guy is awesome', 
  		'I think this is the best bartender on Market St', 
  		'Me and my friends always need some drinks after a long day in Hack Reactor and Quito always hooks us up'
  		],
  		review: ''
  	}
  }

  onChange (e) {
  	this.setState({
  	  review: e.target.value
  	})
  }

  addReview () {
  	var nReviews = this.state.reviews.slice(0)
  	nReviews.push(this.state.review)
  	this.setState({reviews: nReviews})
  	$('#review-input').val('');
  }

  render () {
  	return (
  	  <div>
  	  	<ol>
  	  	{this.state.reviews.map(review => <li>{review}</li>)}
  	  	</ol>
  	  	<textarea id='review-input' rows={5} cols={100} placeholder='Write your review here' onChange={this.onChange.bind(this)} /> 
  	  	<button onClick={this.addReview.bind(this)}> Submit review </button>
  	  </div>
  	)
  }
}

export default ReviewList;