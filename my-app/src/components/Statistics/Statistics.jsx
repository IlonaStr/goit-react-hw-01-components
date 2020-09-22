import React from 'react';
import PropTypes from 'prop-types';
import StatisticsStyle from './Statistics.module.css';
import color from './random-color'

const Statistics = ({title, stats}) => {
return (
    <section className={StatisticsStyle.Statistics}>
        {title && <h2 className={StatisticsStyle.Title}>Upload stats</h2>}
        <ul className={StatisticsStyle['stat-list']}>
        {stats.map((stat) => (
            <li 
            className={StatisticsStyle.Item} key={stat.id} style={{backgroundColor: color() }}>
                <span className={StatisticsStyle.Label}>{stat.label}</span>
        <span className={StatisticsStyle.Percentage}>{stat.percentage}%</span>
            </li>  
            ))}
        </ul>
        </section>
);
};
Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
title: PropTypes.string.isRequired,
stats: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }).isRequired,
).isRequired,
};

export default Statistics;