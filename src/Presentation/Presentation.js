import React from 'react';
import { Fade } from 'react-slideshow-image';

import './Presentation.css';

import s1 from './Slides/01';
import s2 from './Slides/02';
import s3 from './Slides/03';
import s4 from './Slides/04';
import s5 from './Slides/05';
import s6 from './Slides/06';
import s7 from './Slides/07';
import s8 from './Slides/08';
import s9 from './Slides/09';
import s10 from './Slides/10';

const fadeProperties = {
  arrows: true,
  infinite: false,
  indicators: true,
  autoplay: false
};

const slides = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

export default function (props) {
  return (
    <div className="slide-container">
      <h1>Learn from the Git-go</h1>
      <Fade className="box-style" {...fadeProperties}>{slides}</Fade>
    </div>
  );
}
