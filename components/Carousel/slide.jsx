import React, { Component } from 'react';

export default class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: this.props.landingData};
    }
  render() {
      return(
        <section>
          {this.state.landing.map((film, index) =>
            <div className={
              index === this.props.activeIndex ? 'active carousel-preview' : 'inactive carousel-preview'}
              key={index} style={{backgroundImage: `url(${film.img})`}}>
                <h1>{film.title}</h1>
                <p>{film.description}</p>
            </div>
          )}
        </section>
      )
    }
  }