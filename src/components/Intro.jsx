import React from 'react';
import me from '../../resources/images/dan.png';

const Intro = ({ title, intro, text }) => (
  <div class="card" style={{ padding: '40px 0px'}}>
  <section className="container">
    <div className="row">
      <div className="col-lg-6">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{intro}</p>
        <p>{text}</p>
      </div>
      <div className="col-lg-6 d-flex justify-content-center">
        <img
          src={me}
          style={{ height: '500px' }}
        />
      </div>
    </div>
  </section>
  </div>
);

export default Intro;
