import React from 'react';
import Carousel from 'nuka-carousel';
import Image from 'next/image';

function CarouselComponent() {
  return (
    <Carousel
      wrapAround={true}
      autoplay={true}
      autoplayInterval={3000}
      adaptiveHeight={true}
    >
      <Image alt="/Impresss01" src="/Impress01.jpg" height="500" width="500" />
      <Image alt="/Impresss02" src="/Impress02.jpg" height="500" width="500" />
      <Image alt="/Impresss03" src="/Impress03.jpg" height="500" width="500" />
      <Image alt="/Impresss04" src="/Impress04.jpg" height="500" width="500" />
      <Image alt="/Impresss05" src="/Impress05.jpg" height="500" width="500" />
      <Image alt="/Impresss06" src="/Impress06.jpg" height="500" width="500" />
    </Carousel>
  );
}
export default CarouselComponent;
