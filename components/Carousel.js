import shoes from "../shoes.json";
import superShoesLogo from "../images/super-shoes.png";
import arrow from "../images/216151_right_chevron_icon.png";
import { useRef } from "react";

const Carousel = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div id="container">
      <div className="logo">
        <img src={superShoesLogo} alt="super shoes logo" />
      </div>

      <div className="carousel" ref={carousel}>
        {shoes.map((item, idx) => (
          <div key={idx} className="item">
            <div className="image">
              <img src={item.image} alt="shoe" />
            </div>
            <div className="info">
              <span className="name">{item.name}</span>
              <span className="oldPrice">U${item.oldPrice}</span>
              <span className="price">U${item.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src={arrow} alt="scroll left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={arrow} alt="scroll right" />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
