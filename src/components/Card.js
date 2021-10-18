import React from 'react';

const Card = ({ name, ability, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png?size=200x200`} />
      <div>
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{ability}</p>
      </div>
    </div>
  );
}

export default Card;
