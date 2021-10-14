import React from 'react';
import StatisticsItem  from './statistics-item';
import style from '../Statistics/statistics.module.css';
import PropTypes, { arrayOf } from 'prop-types';


const Statistics = ({ statsData }) => {
  return (
        <section className={style.heads}>
            <span className={style.title}>Upload stats</span>
            <ul className={style.statistic}>
            {statsData.map(statData => (
            <StatisticsItem 
                key={statData.id}
                label={statData.label}
                percentage={statData.percentage}
            />
            ))}
            </ul>
      </section>
  );
};

Statistics.propTypes = {
    statsData: arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  export default Statistics;