import React from 'react';
import Intro from './Intro';
import Skills from './Skills';
import config from '../config';

const About = () => (
  <div id="about">
    <Intro {...config} />
    <Skills {...config} />
  </div>
);

export default About;
