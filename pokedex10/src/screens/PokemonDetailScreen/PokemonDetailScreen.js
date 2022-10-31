import React, { useEffect, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import Header from '../../components/Header/Header'
import { ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer } from './styled';
import { goToPokemonList } from '../../routes/coordinator';


function PokemonDetailScreen() {

  const navigate = useNavigate()

  //Pegar o pokemon por params (nome do poke na url) 
  const { name } = useParams()
  // Para procurar no GlobalState o pokemon e pegar os dados necessários
  const { pokemons } = useContext(GlobalStateContext);
  // Estado local para guardar o pokemon
  const [selectedPokemon, setSelectedPokemon] = useState()

  useEffect(() => {
    const currentPokemon = pokemons.find((item) => {
      return item.name === name
    })
    setSelectedPokemon(currentPokemon)
  }, [])

  return (
    <div>
      <Header
        leftButtonFunction={() => goToPokemonList(navigate)}
        title={"Detalhes do Pokemon"}
        showRightButton
      />
      <PokeInfosContainer>
        <ImagesContainer>
          <ImgWrapper src={selectedPokemon && selectedPokemon.sprites.front_default} />
          <ImgWrapper src={selectedPokemon && selectedPokemon.sprites.back_default} />
        </ImagesContainer>
        <StatsContainer>
          <TitleContainer>Poderes</TitleContainer>
          {/* Para buscar os poderes do pokemon */}
          {selectedPokemon && selectedPokemon.stats && selectedPokemon.stats.map((stat) => {
            return (
              <p key={stat.stat.name}>
                <strong>{stat.stat.name}:</strong>
                {stat.base_stat}
              </p>
            )
          })
          }
        </StatsContainer>
        <TypeAndMovesContainer>
          <TypesContainer>
            {selectedPokemon && selectedPokemon.types.map((type) => {
              return <p key={type.type.name}>{type.type.name}</p>
            })}
          </TypesContainer>
          <MovesContainer>
            <TitleContainer>Principais Ataques</TitleContainer>
            {selectedPokemon && selectedPokemon.moves && selectedPokemon.moves.map((move, index) => {
              return (
                index < 5 && <p key={move.move.name}>{move.move.name}</p>
              )
            })}
          </MovesContainer>
        </TypeAndMovesContainer>
      </PokeInfosContainer>
    </div>
  )
}

export default PokemonDetailScreen;