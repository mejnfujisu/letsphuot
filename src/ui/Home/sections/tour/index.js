import "ui/Home/sections/tour/Items.css";
// import { v4 as uuidv4 } from "uuid";
import Card from "ui/Home/sections/tour/Card";
import Carousel from "ui/Home/sections/tour/Carousel";

import Image1 from "./i01.jpeg"
import Image2 from "./i02.jpg"
// import Image3 from "./i03.jpeg"
import Image4 from "./i04.jpg"
import Image5 from "./i05.jpg"

function items() {
  const cards = [
    {
      key: '123',
      content: (
        <Card imagen={Image1} />
      )
    },
    {
      key: '124',
      content: (
        <Card imagen={Image2} />      
      )
    },
    {
      key: '125',
      content: (
        <Card imagen={Image5} />
      )
    },
    {
      key: '126',
      content: (        
        <Card imagen={Image4} />
      )
    },
    {
      key: '127',
      content: (
        <Card imagen={Image5} />
      )
    },
    {
      key: '128',
      content: (
        <Card imagen={Image5} />
      )
    },
    {
      key: '129',
      content: (        
        <Card imagen={Image4} />
      )
    },
    {
      key: '130',
      content: (
        <Card imagen={Image5} />
      )
    }
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default items;
