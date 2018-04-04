// External Dependencies
import React from 'react';

// Internal Dependencies
import Title from './title';

// Component Definition
const Resume = () => (
  <section className="row resume-box col-sm-12">
    <Title />

    <div className="row">
      <h3 className="well">Summary</h3>
      <div className="body-text">
        <p>My journey has taken me from leading young people and teaching bands and drum lines around Texas to making websites and web applications for everyone. As I continue to grow as a developer, I would love to work alongside a collaborative team that values education and community.</p>
        <p>In my previous positions, I was able to practice daily public speaking and leading groups of all sizes through a variety of projects. I remain excited about education and hope to use my influence to make my community a better place each day.</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Specialties </h3>
      <div className="body-text">
        <p><strong>Skills and Languages:</strong></p>
        <p className="indent">JavaScript, HTML5, CSS3, DOM, jQuery, React, Backbone, Web Applications, Web Development</p>
        <p><strong>Computer & Operating Systems:</strong></p>
        <p className="indent">Mac OS X,  iWork suite (Pages, Numbers, Keynote), MS Office (Word, Excel, PowerPoint), Sublime Text 3</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Experience</h3>
      <div className="body-text">
        <p><strong>Call-Em-all</strong> - Frisco, Texas</p>
        <p className="indent">Front End Developer (started December 2015)</p>
        <p className="indent">Primarily work on engineering team to develop the next iteration of the desktop client application. Help solve customer support issues that arise on the personal and technical levels. Primarily using React.js and node.js. All team members work to contribute to the entire customer experience.</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Education</h3>
      <div className="body-text">
        <p><strong>The Iron Yard</strong> - Austin, Texas</p>
        <p className="indent">Front End Engineering Certification (November 2015)</p>
        <p><strong>Texas A&M University-Commerce</strong> - Commerce, Texas </p>
        <p className="indent">Candidate for Master of Music Education (Summer 2016) </p>
        <p className="indent">Bachelor of Science in Music Education (May 2002)</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Personal Projects </h3>
      <div className="body-text">
        <p><strong><a href="http://www.drumsensei.com/">Drumsensei.com</a></strong></p>
        <p className="indent">Personal blog site launched in June 2015.</p>
        <p><strong><a href="http://drumr.getforge.io/">Drumr</a></strong></p>
        <p className="indent">Written using React, Parse, and Masonry, this app provides a searchable database for users to find drummers, add new drummers, or add existing drummers to a favorites list.</p>
        <p><strong>The Mathew Group</strong></p>
        <p className="indent">From 2005 to 2014, I designed and implemented websites for local high school band programs using Rapidweaver and basic HTML and CSS.</p>
      </div>
    </div>

    <div className="row">
      <h3 className="well">Group Projects </h3>
      <div className="body-text">
        <p><strong><a href="http://tiy-austin-front-end-engineering.github.io/">Iron Quizzes</a></strong></p>
        <p className="indent">Working with 16 developers using React, Parse, and Skeleton, this app lets teachers login to create/edit tests and view multiple kinds of analytics. Students can also login and take tests assigned to their specific class.</p>
        <p><strong><a href="http://m2mathew.github.io/">Find a Spot</a></strong></p>
        <p className="indent">Constructed with 2 front-end developers, 1 back-end developer, and 1 designer, this app uses Backbone and jQuery to let a logged-in user find an open parking spot at a selection of Austin restaurants. This was conceived, designed, and deployed in three days. </p>
      </div>
    </div>

    <a href="../../assets/Resume-Michael_Mathew.pdf" target="_blank"><p className="ghost-button">Get the .pdf</p></a>

  </section>
);

export default Resume;
