import React, { Component } from 'react';
import Slide from './slide';
import landingData from 'public/data/data';
import LeftArrow from 'components/ui/LeftArrow';
import RightArrow from 'components/ui/RightArrow';

export default class Carousel extends Component {
  constructor(props) {
  super(props);
    this.state = {
      activeIndex: 0,
      length: landingData.length
    };
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }
    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let length = this.state.length;
    if(index === length - 1) {
      index = 0
    } 
    else {
      index++;
    }
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className='carousel'>
        <div className='carousel-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
          <Slide
            landingData={landingData}
            activeIndex={this.state.activeIndex}
          />
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
    );
  }
}