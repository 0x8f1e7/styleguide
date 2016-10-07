import React, { Component, PropTypes } from 'react';
import styles from './index.styl';

/**
 * Select: drop-down list.
 */
const Select = ({ options, selected, label, color, handleChange }) => (
  <div className={styles.select}>
    { label && <span>{label}</span> }
    <span className={`${styles.value} text-truncate`} style={{ color }}>{options[selected]}</span>
    <i className="icon-budicon-460" />
    <select onChange={handleChange}>
      {options.map((name, index) =>
        <option key={index} value={index} defaultValue={index === selected}>{name}</option>
      )}
    </select>
  </div>
);

Select.defaultProps = {
  options: [ 'Default' ],
  selected: 0,
  label: '',
  handleChange: () => {}
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * Index of default selected value
   */
  selected: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  color: PropTypes.string
};

export default Select;
