import React, { Component } from 'react';
import rightArrow from 'public/assets/right-arrow.svg';

export default class RightArrow extends Component {
  render() {
    return(
      <div className='forwardArrow' onClick={this.props.goToNextSlide}>
        <img src={rightArrow} alt="Next"/>
      </div>
    )
  }
}