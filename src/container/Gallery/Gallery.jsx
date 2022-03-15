import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Jetez un oeil sur notre menu" />
        <h1 className="headtext__cormorant">T'as faim ?</h1>
        <p className="p__opensans" style={{ marginTop: '2rem' }}>T'as envie de voire de quoi on l'air nos burger vien jeter un oeil sur notre menu tu vas te régaler ! C'est impossible d'y résister !</p>
        <button type="button" className="custom__button"><a href="https://www.ubereats.com/ca-fr/store/flash-burger/sdjYecWYXaOSZ_XokDh1fg?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">Notre Menu</a> </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image"></img> 
              <a href='https://z-p3.www.instagram.com/flashburgermtl/' target="_blank" className='gallery__image-icon' rel="noopener noreferrer"><BsInstagram/></a>
              
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;