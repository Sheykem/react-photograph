import React from 'react';

function Header() {
  const nav = ['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'News', 'Contanct'];
  // const myRefAbout = React.createRef()
  // const onClickAbout = (event) => {                  !// спросить у серёги почему не работает
  //   console.log('sdas');
  //   window.scrollTo(2000, myRefAbout.current.scrollHeight);
  // }

  const onClickAbout = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 1200,
      behavior: 'smooth',
    });
  };
  const onClickServices = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 2100,
      behavior: 'smooth',
    });
  };
  const onClickPortfolio = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 3150,
      behavior: 'smooth',
    });
  };

  const onClickTestionials = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 4800,
      behavior: 'smooth',
    });
  };

  const onClickContact = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 5700,
      behavior: 'smooth',
    });
  };

  return (
    <div className="header-bg " style={{ backgroundImage: 'url(/img/back.jpg)', width: '100%' }}>
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img src="img/Logo.png" alt="logo" />
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={onClickAbout} className="nav-link" href="link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={onClickServices} className="nav-link" href="link">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={onClickPortfolio} className="nav-link" href="link">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={onClickTestionials} className="nav-link" href="link">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="link">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a onClick={onClickContact} className="nav-link" href="link">
                    Contact
                  </a>
                </li>
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
