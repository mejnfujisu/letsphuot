import "ui/Home/sections/tour/Items.css";
// import { v4 as uuidv4 } from "uuid";
import Card from "ui/Home/sections/tour/Card";
import Carousel from "ui/Home/sections/tour/Carousel";

import ImageH from "../../../../assets/images/background/global.jpg"

function items() {
  const cards = [
    {
      key: '123',
      content: (
        <Card imagen={ImageH} />
      )
    },
    {
      key: '124',
      content: (
        <Card imagen={ImageH} />      
      )
    },
    {
      key: '125',
      content: (
        <Card imagen={ImageH} />
      )
    },
    {
      key: '126',
      content: (        
        <Card imagen={ImageH} />
      )
    },
    {
      key: '127',
      content: (
        <Card imagen={ImageH} />
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
