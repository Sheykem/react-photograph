import React from 'react';
import Card from './Card';

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
            <Card img={obj.img} title={obj.title} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyServices;




