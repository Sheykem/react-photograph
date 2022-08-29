import React from 'react';

function About() {
  

  return (
    <div className="wrapper">
      <div className="box-about">
        <div className="box-about_item">
          <img className="box-about_back" src="img/work-2.png" alt="workplace" />
          <p className="box-about_vertical">Work place</p>
          <img className="box-about_front" src="./img/photo.jpg" alt="hoto" />
        </div>
        <div className="box-about_item">
          <h2 className="title-h2">About Me</h2>
          <p className="box-about_text">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV
            quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
            quick jigs vex
          </p>
          <div className="progress-bar">
            <div className="progress-bar-line progress-bar--ps">
              <img src="img/pol-circle.png" alt="" />
            </div>
            <div className="progress-bar-text">
              <p>Adobe Photoshop</p>
              <p>100%</p>
            </div>
            <div className="progress-bar-line progress-bar--indesign">
              <img src="img/pol-circle.png" alt="" />
            </div>
            <div className="progress-bar-text">
              <p>Adobe Indesign</p>
              <p>65%</p>
            </div>
            <div className="progress-bar-line progress-bar--xd">
              <img src="img/pol-circle.png" alt="" />
            </div>
            <div className="progress-bar-text">
              <p>Adobe XD</p>
              <p>80%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
