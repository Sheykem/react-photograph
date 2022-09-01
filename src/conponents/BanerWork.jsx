import React from "react";

function BanerWork() {
  const [openBtn,setOpenBtn] = React.useState(false)

    return (
      <div className="section-banner">
        <div className="wrapper">
          <p className="before-title text-center">Do you love my work?</p>
          <h2 className="title-h2 text-center">Available For Freelance Work!</h2>
          <button onClick={(event)=>  setOpenBtn(!openBtn)} href="btn" className="btn">
            Hire me
          </button>
          {openBtn && (
            <ul className="contacts-info">
              <li>+380 50 279 31 68</li>
              <li>Вадим</li>
              <li>adik691897@gmail.com</li>
            </ul>
          )}
        </div>
      </div>
    );
}

export default BanerWork;