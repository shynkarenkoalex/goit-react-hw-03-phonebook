import React from "react";
import "./FilterContact.css";
import PropTypes from "prop-types";

const FilterContact = ({ valueFilter, onChangeFilter }) => (
  <label className="Filter-label">
    Find contacts by name
    <input
      type="text"
      className="Filter-input"
      value={valueFilter}
      onChange={ev => onChangeFilter(ev.target.value)}
    />
  </label>
);

FilterContact.propTypes = {
  valueFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default FilterContact;
