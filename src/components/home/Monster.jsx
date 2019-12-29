import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Monster = ({ monster }) => {
  return (
    <div className='monster'>
      {
        monster && monster.map(({ id, name, email }) => <Card key={id} name={name} email={email} />)
      }
    </div>
  )
}

Monster.propTypes = {
  monster: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Monster;