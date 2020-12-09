import React, { Component } from 'react';
import leftArrow from 'public/assets/left-arrow.svg';


export default class LeftArrow extends Component {
  render() {
    return(
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <img src={leftArrow} alt="Back"/>
      </div>
    )
  }
}