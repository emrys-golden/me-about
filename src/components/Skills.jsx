import React from 'react';
import PropTypes from 'prop-types';
import SkillChart from './SkillChart';

const Skills = () => (
  <section className="container">
    <div className="row">
      <div className="col-md-12" style={{ margin: '40px 0px 60px 0px' }}>
        <h2>my skills</h2>
        <SkillChart />
      </div>
    </div>
  </section>
);

export default Skills;
