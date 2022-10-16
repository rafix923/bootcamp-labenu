import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { HomeHeader, PokeCardName } from "./styles";
import { goToPokedex } from '../../routes/coordinator';
import { goToDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Home() {
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
        <button onClick={() => goToPokedex(navigate)}>Ver minha POKEDEX</button>
        <h1> Home Page PokedeX </h1>
      </HomeHeader>
      {pokemons.map((pokemon) => (
        <PokeCardName key={pokemon.id} pokemon={pokemon} addToPokedex={addToPokedex}>
          {pokemon.name}

          <button onClick={() => addToPokedex(pokemon)} >Adicionar</button>
          <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
        </PokeCardName>
      ))}
    </div>
  )
}

export default Home;
