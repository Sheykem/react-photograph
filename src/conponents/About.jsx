import React from 'react';

function About(props) {
  const skills = [
    { title: 'Adobe Photoshop', proc: '100%' },
    { title: 'Adobe Indesign', proc: '65%' },
    { title: 'Adobe XD', proc: '85%' },
  ];

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
            {skills.map((obj, index) => (
              <React.Fragment key={index}>
                <div style={{ width: obj.proc }} className="progress-bar-line progress-bar--ps">
                  <img src="img/pol-circle.png" alt="" />
                </div>
                <div className="progress-bar-text">
                  <p>{obj.title}</p>
                  <p>{obj.proc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
