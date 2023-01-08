import React, { useState } from "react";
import "./style/sliderImgs.css";

const SliderImg = ({ listImg }) => {
  const [indexImg, setIndexImg] = useState(1);
  const styleContainer = {
    transform: `translateX(calc(100% * -${indexImg} / 3))`,
  };

  const handleBack = () => {
    if (indexImg - 1 < 0) {
      setIndexImg(2);
    } else {
      setIndexImg(indexImg - 1);
    }
  };

  const handleNext = () => {
    if (indexImg + 1 > 2) {
      setIndexImg(0);
    } else {
      setIndexImg(indexImg + 1);
    }
  };

  console.log(listImg);
  return (
    <div className="slider">
      <button onClick={handleBack} className="slider__back">
        &#60;
      </button>
      <div style={styleContainer} className="slider__container">
        {listImg?.map((url) => (
          <div className="slider__img-container" key={url}>
            <img className="slider__img" src={url} alt="" />
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="slider__next">
        &#62;
      </button>
      <ul className="slider__ul">
        {listImg?.map((url, index) => (
          <li
            className={`slider__img-container ${
              index === indexImg && "slider__border"
            }`}
            onClick={() => setIndexImg(index)}
            key={url}
          >
            <img className="slider__img" src={url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderImg;
