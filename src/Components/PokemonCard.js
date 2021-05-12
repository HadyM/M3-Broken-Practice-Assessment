import React from "react";

const PokemonCard = ({ pokemon }) => {
  // let imgSrc;
  // if (pokemon.sprites === undefined) {
  //   imgSrc = "";
  // } else {
  //   imgSrc = pokemon.sprites.front_default;
  // }
  // This is the same as "Short Circuting" line 15-17
  return (
    <div>
      <p>Name: {pokemon.name}</p>
      {/* <img src={imgSrc} alt={pokemon.name} /> */}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
      <p>ID: {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;
