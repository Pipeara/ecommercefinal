import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import './PrettyPizza.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Reviews() {
  return (
    <div className='reviews'>
      <h3>Hear from our clients!</h3>
      <hr />
      <div className='carousel-wrapper'>
        <Carousel infiniteLoop autoPlay showThumbs={false}>
          <div className='review-carousel'>
            <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
            <p>"Greatest local pizza. I go every Friday with my family and they have not messed up an order once! I always go to Little Mateo's the staff are always friendly and have fast service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet turpis quis augue finibus vestibulum. "</p>
          </div>
          <div className='review-carousel'>
            <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
            <p>"Nulla facilisi. Nunc id nunc et nulla scelerisque convallis. Praesent tincidunt, nisl nec laoreet suscipit, metus nunc elementum neque, ac pulvinar ligula eros semper nunc. Sed nec elit lacus. Etiam convallis felis in nulla molestie, vitae bibendum ante pellentesque."</p>
          </div>
          <div className='review-carousel'>
            <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /></span>
            <p>"Phasellus sed lectus eget nunc maximus rhoncus. Quisque et nunc eu orci lacinia dignissim non quis erat. Curabitur erat tellus, volutpat sit amet arcu in, rhoncus fringilla dolor. Donec in quam in purus efficitur volutpat a a turpis. Phasellus enim erat, tempor vitae risus non, efficitur vulputate mauris. Phasellus tincidunt aliquam velit sed euismod. Aenean at nisl porta, volutpat mauris ac, commodo nunc."</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}