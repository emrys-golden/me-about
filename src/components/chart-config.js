export default {
  type: 'horizontalBar',
  data: {
    labels: ['Nodejs', 'React', 'Python', 'Java', 'C/C++'],
    datasets: [
      {
        label: '',
        data: [4.0, 4.8, 3.6, 1.5, 3, 4.6],
        backgroundColor: [
          '#3276D0',
          '#E0E7FC',
          '#75C3D8',
          '#99ebdc',
          '#78A1BB',
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    gridLines: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontSize: 16,
            fontColor: '#283044',
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            fontSize: 16,
            fontColor: '#283044',
            display: true,
            callback: (value) => {
              switch (value) {
                case 1:
                  return 'novice';
                case 3:
                  return 'moderate';
                case 5:
                  return 'expert';
                default: return '';
              }
            },
          },
        },
      ],
    },
  },
};
