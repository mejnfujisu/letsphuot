import Styles from "ui/Home/sections/tour/Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring"
import Button from "ui/Home/sections/tour/Button";

import PropTypes from "prop-types";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    width: 450,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (

    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div>
        <img src={imagen} alt="" />
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            marginTop: "10px"
          }}
        >
          <Button text="by Han" style={{ background: "white" }} />
        </div>
        <h2>Đà Lạt Phượt</h2>
        <p>HCM - Đà Lạt</p>
        <div className={Styles.btnn}>
          {/* <Button text="Demo" /> */}
          <p style={{ fontSize: "small" }}>Kh: Sep 15</p>
          <Button text="Detail" />
        </div>
      </div>
    </animated.div>

  );
}

Card.defaultProps = {
  imagen: ""
};

Card.propTypes = {
  imagen: PropTypes.string
};

export default Card;
