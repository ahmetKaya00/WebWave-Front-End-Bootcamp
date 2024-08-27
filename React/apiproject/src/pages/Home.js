import React from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const items = [
  {
    src: 'https://via.placeholder.com/1200x400?test=Slide+1',
    altText: 'Slide 1',
    caption: 'Welcome to our Store'
  },
  {
    src: 'https://via.placeholder.com/1200x400?test=Slide+2',
    altText: 'Slide 2',
    caption: 'Welcome to our Product'
  },
  {
    src: 'https://via.placeholder.com/1200x400?test=Slide+3',
    altText: 'Slide 3',
    caption: 'Best Deals'
  },
];

function Home(){
  return(
    <div>
      <Carousel>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <img className='d-block w-100' src={item.src} alt={item.altText}/>
            <CarouselCaption>
              <h3>{item.caption}</h3>
            </CarouselCaption>
          </CarouselItem>
        ))}
      </Carousel>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}
export default Home;