import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import { goToPokedex } from '../../routes/coordinator';
import { PokeListContainer } from '../PokemonListScreen/styled';


function PokemonListScreen() {

  const navigate = useNavigate()

  const { pokemons } = useContext(GlobalStateContext)

  return (
    <div>
      <Header
        title={"Lista de Pokémons"}
        leftButtonFunction={() => goToPokedex(navigate)}
      />
      <PokeListContainer>
        {pokemons &&
          pokemons.map((pokemon) => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />
          })
        }
      </PokeListContainer>
    </div>
  )
}

export default PokemonListScreen;