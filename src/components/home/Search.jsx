import React from 'react';
import PropTypes from 'prop-types';

const SearchMonster = ({ onChange }) => (
  <>
    <input type="text" className="search-monster" placeholder="search monster" onChange={onChange} />
  </>
)

SearchMonster.propTypes = {
  onChange:  PropTypes.func.isRequired
}

export default SearchMonster;