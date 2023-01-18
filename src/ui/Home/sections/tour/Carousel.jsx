import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import PropTypes from "prop-types";
import Card from "ui/Home/sections/tour/Card";

export default function Carroussel({ offset, showArrows, cards }) {
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [isShowArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null)

  function mapper(element, index) {
    return { ...element, onClick: () => setGoToSlide(index) };
  }

  const table = cards.map(mapper);

  const [isCards] = useState(table);

  useEffect(() => {
    setOffsetRadius(offset);
    setShowArrows(showArrows);
  }, [offset, showArrows])

  return (
    <div style={{ width: "90%", height: "800px" }} >
      <Carousel
        slides={isCards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={isShowArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}

Carroussel.defaultProps = {
  offset:2,
  showArrows:false,
  cards: {
    key: '123',
    content: (
      <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
    )
  }
};

Carroussel.propTypes = {
  cards: PropTypes.objectOf,
  offset: PropTypes.number,
  showArrows: PropTypes.bool
};