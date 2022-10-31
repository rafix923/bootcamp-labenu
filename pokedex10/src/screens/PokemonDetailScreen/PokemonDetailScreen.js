import React, { useEffect, useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import Header from '../../components/Header/Header'
import { ImagesContainer, ImgWrapper, MovesContainer, PokeInfosContainer, StatsContainer, TitleContainer, TypeAndMovesContainer, TypesContainer } from './styled';
import { goToPreviousPage } from '../../routes/coordinator';
import axios from 'axios';
import { BASE_URL } from '../../constants/url'



function PokemonDetailScreen() {

  const navigate = useNavigate()

  const goToPreviousPage = () => {
    navigate(-1)
  }

  //Pegar o pokemon por params (nome do poke na url) 
  const { name, pokedexScreen } = useParams()
  // Para procurar no GlobalState o pokemon e pegar os dados necessários
  const { pokemons, pokedex } = useContext(GlobalStateContext);
  // Estado local para guardar o pokemon
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    let current = [];
    if (pokedexScreen) {
      current = pokedex.find((item) => {
        return item.name === name;
      });
    } else {
      current = pokemons.find((item) => {
        return item.name === name;
      });
    }

    if (!current) {
      axios
        .get(`${BASE_URL}/pokemon/${name}`)
        .then((res) => setSelectedPokemon(res.data))
        .catch((err) => console.log(err.response.message));
    } else {
      setSelectedPokemon(current);
    }
  }, []);

  return (
    <div>
      <Header
      title={"Detalhes do Pokémon"}
        leftButtonFunction={() => goToPreviousPage(navigate)}
        showRightButton        
      />
      {selectedPokemon && selectedPokemon.sprites && (
        <PokeInfosContainer>
          <ImagesContainer>
            <ImgWrapper src={selectedPokemon.sprites.front_default} />
            <ImgWrapper src={selectedPokemon.sprites.back_default} />
          </ImagesContainer>
          <StatsContainer>
            <TitleContainer>Poderes</TitleContainer>
            {/* Para buscar os poderes do pokemon */}
            {selectedPokemon &&
              selectedPokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    <strong>{stat.stat.name}: </strong>
                    {stat.base_stat}
                  </p>
                );
              })}
          </StatsContainer>
          <TypeAndMovesContainer>
            <TypesContainer>
            <TitleContainer>Tipo</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.types.map((type) => {
                  return <p key={type.type.name}>{type.type.name}</p>;
                })}
            </TypesContainer>
            <MovesContainer>
              <TitleContainer>Principais ataques</TitleContainer>
              {selectedPokemon &&
                selectedPokemon.moves.map((move, index) => {
                  return (
                    index < 5 && <p key={move.move.name}>{move.move.name}</p>
                  );
                })}
            </MovesContainer>
          </TypeAndMovesContainer>
        </PokeInfosContainer>
      )}
    </div>
  );
}

export default PokemonDetailScreen;