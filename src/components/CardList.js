import React from 'react';
import Card from './Card';

const CardList = ({ pokedex }) => {
  return (
    <div>
      {
        pokedex.map((pokemon, i) => {
          return (
            <Card
              key={i}
              id={pokedex[i].id}
              name={pokedex[i].name}
              ability={pokedex[i].ability}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;