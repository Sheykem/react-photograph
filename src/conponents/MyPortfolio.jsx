import React from "react";

function MyPortfolio() {
    // const imgPortfolio = [
    //   { img: '/img/portfolio/001.jpg' },
    //   { img: '/img/portfolio/02.jpg' },
    //   { img: '/img/portfolio/03.jpg' },
    //   { img: '/img/portfolio/04.jpg' },
    //   { img: '/img/portfolio/05.jpg' },
    //   { img: '/img/portfolio/06.jpg' },
    // ];

    return (
      <div className="All-portfolio">
        <div className="wrapper">
          <h2 className="title-h2 text-center">My Portfolio</h2>
          <p className="after-title text-center">
            Here is all my work that i maked for some great people
          </p>

          <div className="portfolio">
            <div className="portfolio-item portfolio-01">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/001.jpg" alt="work01" />
              </div>
            </div>
            <div className="portfolio-item portfolio-02">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/02.jpg" alt="work02" />
              </div>
            </div>
            <div className="portfolio-item portfolio-03">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/03.jpg" alt="work03" />
              </div>
            </div>
            <div className="portfolio-item portfolio-04">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/04.jpg" alt="work04" />
              </div>
            </div>
            <div className="portfolio-item portfolio-05">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/05.jpg" alt="work05" />
              </div>
            </div>
            <div className="portfolio-item portfolio-06">
              <div className="portfolio-thumb">
                <img src="/img/portfolio/06.jpg" alt="work06" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyPortfolio;