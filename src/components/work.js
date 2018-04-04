// External Dependencies
import React from 'react';

// Component Definition
const Work = () => (
  <div className="container work-box">

    <h1 className="text-center">My work so far</h1>

    <div className="row card">
      <div className="col-md-4">
        <h1 className="title-h1">Drumr</h1>
        <p>A way to find and keep track of your favorite drummers. This application was designed and built in a two-week period as a final project for The Iron Yard. It uses Masonry to organize the photos and React to load the information quickly.</p>
        <p><strong>Built With</strong><br />HTML5 / CSS3 / React.js / Backbone.js / Parse API / Masonry / Sass</p>
        <a href="http://drumr.getforge.io/" target="_blank"><p className="ghost-button">Visit Website</p></a>
        <a href="https://github.com/m2mathew/drumr-app-v2" target="_blank"><p className="ghost-button">View Code</p></a>
      </div>
      <div className="col-md-8 m-img-top">
        <img src="../../images/drumr-screenshot.png" alt="Screenshot of drummer application" className="img-responsive screenshot"/>
      </div>
    </div>

    <div className="row card">
      <div className="col-md-4">
        <h1 className="title-h1">Iron Quizzes</h1>
        <p>Working with 16 developers using React, Parse, and Skeleton, this app lets teachers login to create/edit tests and view multiple kinds of analytics. Students can also login and take tests assigned to their specific class. Most of my work involved the analytics data for teachers to access.</p>
        <p><strong>Built With</strong><br />HTML5 / CSS3 / React.js / Backbone.js / Parse API / Sass</p>
        <a href="http://tiy-austin-front-end-engineering.github.io/" target="_blank"><p className="ghost-button">Visit Website</p></a>
        <a href="https://github.com/TIY-Austin-Front-End-Engineering/Iron-Quizzes" target="_blank"><p className="ghost-button">View Code</p></a>
      </div>
      <div className="col-md-8 m-img-top">
        <img src="../../images/iron-quizzes-screenshot.png" alt="Screenshot of Iron Quizzes application" className="img-responsive screenshot"/>
      </div>
    </div>

    <div className="row card">
      <div className="col-md-4">
        <h1 className="title-h1">Find a Spot</h1>
        <p>Constructed with 2 front-end developers, 1 back-end developer, and 1 designer, this app uses Backbone and jQuery to let a logged-in user find an open parking spot at a selection of Austin restaurants. This was conceived, designed, and deployed in four days. </p>
        <p><strong>Built With</strong><br />HTML5 / CSS3 / Backbone.js / Sass</p>
        <a href="https://m2mathew.github.io/" target="_blank"><p className="ghost-button">Visit Website</p></a>
        <a href="https://github.com/m2mathew/find-a-spot" target="_blank"><p className="ghost-button">View Code</p></a>
      </div>
      <div className="col-md-8 m-img-top">
        <img src="../../images/find-a-spot-screenshot.png" alt="Screenshot of Find a Spot application" className="img-responsive screenshot"/>
      </div>
    </div>
  </div>
);

export default Work;
