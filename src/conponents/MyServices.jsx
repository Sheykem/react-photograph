import React from 'react';

function MyServices(props) {
  const myServices = [
    { title: 'Graphic Design', img: '/img/icon01.png' },
    { title: 'Photography', img: '/img/icon02.png' },
    { title: 'Web Design', img: '/img/icon03.png' },
    { title: 'Social Media', img: '/img/icon04.png' },
    { title: 'Marketing', img: '/img/icon05.png' },
    { title: 'App Developing', img: '/img/icon06.png' },
  ];


  const [active, setActive] = React.useState(-1) // открыть/закрыть Reed more
  const onClick = (event) => {
    event.preventDefault()
    const clickedIndex = parseInt(event.currentTarget.getAttribute('data-index'))
    if (active !== clickedIndex) {
      setActive(clickedIndex);
    } else {
      setActive(-1)
    }
  }

  return (
    <div className="center">
      <div className="wrapper">
        <h2 className="title-h2 text-center">My Services</h2>
        <p className="after-title text-center">
          Check out all my services and think what do you want
        </p>

        <div className="service">
          {myServices.map((obj, index) => (
            <div key={index} className="service-item">
              <div className="service_icon service_design">
                <img src={obj.img} alt="icon" />
              </div>
              <h3 className="title-h3">{obj.title}</h3>
              <div className="service_text">
                When your customers can buy what you sell from others, that’s called competition.
                That also makes it a for commodity.
              </div>
              {/* ! cпросить Серёгу {reedMore.map((obj, index) => ( */}
              <a href="photo" className="service_link ">
                <span data-index={index} onClick={onClick}>Reed More</span>
                <p> {active === index ? 'new info for this menu' : ''}</p>
              </a>
              {/* ))} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyServices;

