// External Dependencies
import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// Component Definition
class About extends Component {
  state() {
     showModal: false;
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  componentDidMount() {
    $('#myModal').on('shown.bs.modal', () => {
      $('#myInput').focus()
    });
  }

  render() {
    return (
      <div className="container about-box">
        <div className="row text-justify">
          <strong>HOW TO MAKE A FRONT END DEVELOPER NAMED MIKE </strong>
          <span>&bull; FALL IN LOVE WITH LEARNING </span>
          <span>&bull; GET A TRS-80 FROM UNCLE RICKY AND LEARN TO PROGRAM IN BASIC </span>
          <span>&bull; START HITTING THINGS WITH DRUMSTICKS </span>
          <span>&bull; PLAY LOTS OF VIDEO GAMES </span>
          <span>&bull; TAKE TWO YEARS OF COMPUTER SCIENCE IN HIGH SCHOOL USING C++ AND TURBO PASCAL </span>
          <span>&bull; SIT NEXT TO FUTURE WIFE IN COMPUTER SCIENCE </span>
          <span>&bull; MAJOR IN MUSIC EDUCATION IN COLLEGE </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#dci" className="text-callout">TOUR AND PERFORM WITH A DRUM AND BUGLE CORPS</a>
            <div className="modal fade" id="dci" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/drum-corps-crown-2000.jpeg" alt="Mike on tour with Carolina Crown 2000"/>
                  </div>
                  <h4 className="modal-title">I marched with the Troopers in 1996 and Carolina Crown in 2000 (pictured, far right), both playing quads in the drum line. This experience is unlike anything else. We traveled on charter buses for a summer and stayed in high schools in each city. It is kind of like the army meets marching band. </h4>
                </div>
              </div>
            </div>
          </span>
          <span>&nbsp;&bull; SPEND EQUAL TIME WRITING MUSIC ON A COMPUTER AS PERFORMING IT </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#wedding" className="text-callout">GET MARRIED TO YOUR HIGH SCHOOL SWEETHEART</a>
            <div className="modal fade" id="wedding" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/michael-and-melissa.jpg" alt="Michael and Melissa heading to the reception"/>
                  </div>
                  <h4 className="modal-title">Melissa and I were married in December 2000 after dating since high school! Still going strong with a great family!</h4>
                </div>
              </div>
            </div>
          </span>
          <span>&nbsp;&bull; GRADUATE COLLEGE AND TEACH MUSIC FOR OVER A DECADE </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#trinity" className="text-callout">CONVINCE STUDENTS TO WORK HARD ENOUGH TO WIN AN INTERNATIONAL COMPETITION</a>
            <div className="modal fade" id="trinity" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/trinity.jpg" alt="The entrance to The Iron Yard-Austin campus"/>
                  </div>
                  <h4 className="modal-title">As winners of the International Percussion Ensemble Contest, my students at Trinity High School were invited to perform at the 2006 Percussive Arts Society International Convention in Austin, Texas. I commissioned a new work for percussion ensemble from composer Dwayne Rice that we premiered at this concert. The students played great, and we had a blast!</h4>
                </div>
              </div>
            </div>
          </span>

          <span>&nbsp;&bull; MAKE WEBSITES FOR YOUR BAND PROGRAMS </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#kids" className="text-callout">HAVE THREE KIDS ALONG THE WAY</a>
            <div className="modal fade" id="kids" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/kids.jpg" alt="The entrance to The Iron Yard-Austin campus"/>
                  </div>
                  <h4 className="modal-title">Isaac (b.2002), Alexis (b.2005), and Olivia (b.2012) are enjoying beautiful downtown Dallas around Thanksgiving 2015. Far right is my brother Stephen (b.1998)</h4>
                </div>
              </div>
            </div>
          </span>
          <span>&nbsp;&bull; REALIZE THAT YOU SPEND AS MUCH TIME FORMATTING AN EMAIL AS TEACHING </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#bro" className="text-callout">BECOME THE GUARDIAN FOR YOUR LITTLE BROTHER</a>
            <div className="modal fade" id="bro" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/stephen-and-mike.jpg" alt="Mike with his little brother Stephen"/>
                  </div>
                  <h4 className="modal-title">Stephen and I were hanging around at the Top of the Rock in Manhattan, NYC in May 2015.</h4>
                </div>
              </div>
            </div>
          </span>
          <span>&nbsp;&bull; START LEARNING MORE CODE </span>
          <span>&bull; SWITCH GEARS FROM BEING A BAND DIRECTOR TO A WEB DEVELOPER </span>
          <span>&bull;&nbsp;
            <a data-toggle="modal" href="#tiy" className="text-callout">ENROLL AT A CODE SCHOOL THREE HOURS FROM HOME</a>
            <div className="modal fade" id="tiy" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <img className="modal-pic" src="../../images/iron-yard-austin.jpg" alt="The entrance to The Iron Yard-Austin campus"/>
                  </div>
                  <h4 className="modal-title">My time in code school at The Iron Yard-Austin was an immersive dive into front end coding and development. My instructor Aaron Larner always gave us the nudge we needed to solve problems ourselves. We also used Agile methodology for three projects and built applications on teams  with back end and design students. </h4>
                </div>
              </div>
            </div>
          </span>
          <span>&nbsp;&bull; KEEP LEARNING AND MAKING AWESOME THINGS.</span>
        </div>
      </div>
    );
  }
}

export default About;
