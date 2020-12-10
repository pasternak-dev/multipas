import React, { Component } from 'react';
import Link from 'next/link'

export default class Header extends Component {
  constructor(props) {
  super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='header'>
          <div className="header-logo">
            <Link href="/">
                <img src="assets/logo.svg" alt="Multiplex"/>
            </Link>
          </div>
      </div>
    );
  }
}