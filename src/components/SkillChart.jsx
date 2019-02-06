import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';
import config from './chart-config';

class SkillsChart extends React.Component {
  componentDidMount() {
    Chart.defaults.scale.gridLines.display = false;

    new Chart(this.node, config);
  }

  render() {
    return (
      <canvas
        className="skills-chart"
        width="400"
        height="200"
        ref={(node) => this.node = node}
      />
    );
  }
}

export default SkillsChart;
