import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';

function Advantages() {
  const [countLike,setCountLike]= React.useState(0)
  const onClickLike = () => {
    setCountLike(countLike + 1)
  }
  return (
    <div className="section-advanteges">
      <div className="wrapper">
        <div className="advanteges">
          <div className="advanteges-item">
            <div className="avanteges_icon avanteges_icon-01">
              <img
                onClick={onClickLike}
                src="/img/portfolio/heart01.jpg"
                alt=""
                className="icon_01"
              />
            </div>
            <p className="advantages_title">
              <span className="avanteges_nomer">{countLike}</span>
              Happy Customers
            </p>
          </div>
          <div className="advanteges-item">
            <div className="avanteges_icon avanteges_icon-01">
              <img src="/img/portfolio/heart02.jpg" alt="" />
            </div>
            <p className="advantages_title">
              <span className="avanteges_nomer">10</span>
              Completed Project
            </p>
          </div>
          <div className="advanteges-item">
            <div className="avanteges_icon avanteges_icon-01">
              <img src="/img/portfolio/heart03.jpg" alt="" />
            </div>
            <p className="advantages_title">
              <span className="avanteges_nomer">1</span>
              Years Experience
            </p>
          </div>
          <div className="advanteges-item">
            <div className="avanteges_icon avanteges_icon-01">
              <img src="/img/portfolio/heart04.jpg" alt="" />
            </div>
            <p className="advantages_title">
              <span className="avanteges_nomer">100</span>
              Wins Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
