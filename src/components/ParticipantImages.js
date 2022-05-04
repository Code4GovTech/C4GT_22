import React from 'react';
import styles from './ParticipantImages.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageList = [
  {
    img: '/img/c4gt22participants.png',
    title: 'C4GT - 2022 participants',
  },
  {
    img: '/img/c4gt23participants.png',
    title: 'C4GT - 2023 participants',
  } 
];

export default function ParticipantImages() {
  return (
    <section className={styles.imageCarousel}>
      <div>
        <p className={`hero__subtitle ${styles.subTitle}`}>
          Meet our participants
        </p>
      </div>
      <div>
        <Carousel showArrows={true} ariaLabel='Images of participants'
          autoPlay={true} interval='6000' infiniteLoop={true}>
          {ImageList.map((props, idx) => (
            <div key={idx}>
              <img src={useBaseUrl(props.img)} />
              <p className={styles.imageCarouselCaption}>{props.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
