import React from 'react';

function Header() {
  const nav = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'News', 'Contanct'];
  return (
    <div className="header-bg " style={{ backgroundImage: 'url(/img/back.jpg)' }}>
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img src="img/Logo.png" alt="logo" />
            <nav>
              <ul className="nav">
                {nav.map((obj, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href="navigation">
                      {obj}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="wrap">
            <h1 className="title-h1">
              I Am <span>Photographer</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
