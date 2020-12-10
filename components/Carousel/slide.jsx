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
              index === this.props.activeIndex ? 'active carousel-preview' : 'inactive'}
              key={film.id} style={{backgroundImage: `url(${film.img})`}}>
                <div className="carousel-preview_container">
                  {film.poster && (
                    <img src={film.poster} alt=''/>
                  )}
                  {!film.poster && (
                    <h1>{film.title}</h1>
                  )}
                  <p>{film.description}</p>
                </div>
            </div>
          )}
        </section>
      )
    }
  }