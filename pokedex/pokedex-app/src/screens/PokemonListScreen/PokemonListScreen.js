import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { HomeHeader, PokeCardName } from "./styles";
import { goToPokedexScreen } from '../../routes/coordinator';
import { goToPokemonDetailScreen } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function PokemonListScreen() {
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  axios
    .get(BASE_URL)
    .then((response) => {
      setPokemons(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  const addToPokedex = (pokemon) => {
    const selectedPokemons = [...pokemons, pokemon]
    setPokemons(selectedPokemons)
    console.log(pokemon);
  }

  return (
    <div>
      <HomeHeader>
        <button onClick={() => goToPokedexScreen(navigate)}>Ver minha POKEDEX</button>
        <h1> Home Page PokedeX </h1>
      </HomeHeader>
      {pokemons.map((pokemon) => (
        <PokeCardName key={pokemon.id} pokemon={pokemon} addToPokedex={addToPokedex}>
          {pokemon.name}

          <button onClick={() => addToPokedex(pokemon)} >Adicionar</button>
          <button onClick={() => goToPokemonDetailScreen(navigate)}>Detalhes</button>
        </PokeCardName>
      ))}
    </div>
  )
}

export default PokemonListScreen;
