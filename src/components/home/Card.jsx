import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ name, email }) => (
  <div className='card'>
    <img alt='monster' src={`https://robohash.org/${name}`} />
    <p>{name}</p>
    <p>{email}</p>
  </div>
)

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default Card;