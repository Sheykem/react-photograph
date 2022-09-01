import React from 'react';

function Card({ img, title }) {
  const [active, setActive] = React.useState(false);

  const onClick = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="service-item">
      <div className="service_icon service_design">
        <img src={img} alt="icon" />
      </div>
      <h3 className="title-h3">{title}</h3>
      <div className="service_text">
        When your customers can buy what you sell from others, that’s called competition. That also
        makes it a for commodity.
      </div>
      {/* ! cпросить Серёгу {reedMore.map((obj, index) => ( */}
      <a href="photo" className="service_link ">
        <span onClick={onClick}>Reed More</span>
        <p>{active ? 'this text' : ''}</p>
      </a>
      {/* ))} */}
    </div>
  );
}

export default Card;
