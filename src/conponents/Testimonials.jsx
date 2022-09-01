import React from 'react';

function Testimonials() {
    const testimonials = [
      { name: 'Jonathon Lee', img:'/img/foto-feedbeack01.png', skill: 'UI/UX Designer', about:'Finding the right partner to help make this goal a reality was key. The smart andcreative team at Blue Fountain Media has helped anthony.com establish itself as asuccessful online business and become synonymous with an enjoyable solutions.'},
      { name: 'Emalia Clark', img:'/img/foto-feedbeack02.png',  skill: 'Frontend Dev', about:'Blue Fountain Media came up with the design on their first try, delivered the completepackage on a reasonable budget, and continued to fine-tune it. That wasnt enough --they also created a plan to market the website and increase traffic.' },
    ];
    return (
      <div className="wrapper">
        <h2 className="title-h2 text-center">Testimonials</h2>
        <p className="after-title text-center">Lets check what people say about me and my work</p>
        <div className="section-feedback">
          {testimonials.map((obj, index) => (
            <div key={index} className="feedback-item">
              <div className="feedback-top">
                <div className="feedback-thumb">
                  <img src={obj.img} alt="Jonathon" />
                </div>
                <div className="feedback-name">
                  <p className="feedback-name_title">{obj.name}</p>
                  <p className="feedback-name_job">{obj.skill}</p>
                </div>
              </div>
              <div className="feedback-body">{obj.about}</div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Testimonials;


        // <div className="feedback-item_2">
        //   <div className="feedback-top">
        //     <div className="feedback-thumb">
        //       <img src="/img/foto-feedbeack02.png" alt="Jonathon" />
        //     </div>
        //     <div className="feedback-name">
        //       <p className="feedback-name_title">Emalia Clark</p>
        //       <p className="feedback-name_job">Frontend Dev</p>
        //     </div>
        //   </div>
        //   <div className="feedback-body">
        //     Blue Fountain Media came up with the design on their first try, delivered the complete
        //     package on a reasonable budget, and continued to fine-tune it. That wasn't enough --
        //     they also created a plan to market the website and increase traffic.
        //   </div>
        // </div>;