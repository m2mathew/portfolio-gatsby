// External Dependencies
import React, { Component } from 'react';

// Component Definition
class Navigation extends Component {
  state() {
    links: [];
  }

  componentDidMount() {
    $(document).ready(function(){
      $('.dropdown-toggle').dropdown();
    })
  }

  render() {
    const links = [
      <li key="home" className={currentPage === '' ? 'active nav-link' : 'nav-link'}>
        <a href="#">home</a>
      </li>,
      <li key="resume" className={currentPage === 'resume' ? 'active nav-link' : 'nav-link'}>
        <a href="#resume">resume</a>
      </li>,
      <li key="speaking" className={currentPage === 'speaking' ? 'active nav-link' : 'nav-link'}>
        <a href="#speaking">speaking</a>
      </li>
    ];

    return (
      <div className="container-fluid">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-left" id="menu">
            {links}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
