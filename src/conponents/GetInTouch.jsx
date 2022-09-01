import React from "react";

function GetInTouch() {
    return (
      <div className="get">
        <div className="wrapper">
          <div className="get-text">
            <h2 className="title-h2 text-center">Get in Touch</h2>
            <p className="after-title-01 text-center">
              Have you any quistion? Send me message without hesitated
            </p>
            <div className="froms">
              <input className="getInfo text-center" type="text" name="name" placeholder="Your Full Name" />
              <input className="getInfo text-center" type="text" name="lastName" placeholder=" Email Address"/>
              <textarea className="getInfo text-center" type="textarea" name="massge" placeholder="Your Message" />
            </div>
            {/* <p className="after-title-02 text-center">Your Full Name</p>
            <p className="after-title-03 text-center">Email Address</p>
            <p className="after-title-04 text-center">Your Message</p> */}
            <div className="get-btn">
              <p className="get-btn_p">
                <a href="fd">Send Message</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default GetInTouch;