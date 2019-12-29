import React, { useEffect, useState } from 'react';

import SearchMonster from './Search';
import Monster from './Monster';

const Home = () => {
  const [ state, setState ] = useState({ monsters: [], text: '' });
  const { monsters, text } = state;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setState({ ...state, monsters: users }))
      .catch(error => console.log(error))
      // eslint-disable-next-line
  },[]);

  const onChange = e => setState({ ...state, text: e.target.value });

  const search = text => data => data.name.toLowerCase().startsWith(text.toLowerCase()) || !text;
  const monster = monsters.filter(search(text)).map(monster => monster);

  return (
    <>
      <SearchMonster  onChange={onChange} />
      <Monster monster={monster} />
    </>
  )
}

export default Home;