import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { goToPokemonList } from '../../routes/coordinator';
import { PokeListContainer } from './styled';
import { GlobalStateContext } from '../../global/GlobalStateContext'
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokedexScreen() {

  const navigate = useNavigate()

  const { pokedex } = useContext(GlobalStateContext)
  return (
    <>
      <Header
        title={"Pokedex"}
        leftButtonFunction={() => goToPokemonList(navigate)}
      />
      <PokeListContainer>
        {
          pokedex && pokedex.map((item) => {
            return <PokemonCard key={item.name} isPokedex pokemon={item} />
          })
        }
      </PokeListContainer>
    </>
  )
}

export default PokedexScreen;