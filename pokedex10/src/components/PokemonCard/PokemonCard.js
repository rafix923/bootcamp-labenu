import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ButtonsContainer, ImgContainer, PokeCardContainer, PokeImg, AddPokemon, PokemonDetails } from '../PokemonCard/styled';
import { goToPokemonDetail } from '../../routes/coordinator';
import { GlobalStateContext } from '../../global/GlobalStateContext';


function PokemonCard({ pokemon, isPokedex }) {

    const navigate = useNavigate();

    // Para pegar dados do estado global
    const { pokemons, setPokemons, pokedex, setPokedex } = useContext(GlobalStateContext)

    const addToPokedex = () => {
        const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)
        const newPokemonsList = [...pokemons]
        newPokemonsList.splice(pokeIndex, 1)
        const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id });

        const newPokedexList = [...pokedex, pokemon]
        // Para o pokemon excluído da pokedex retornar à lista de pokemons por ordem do seu index
        const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id })

        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons)
    };

    const removeFromPokedex = () => {
        const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
        const newPokedexList = [...pokedex]
        newPokedexList.splice(pokeIndex, 1);

        const orderedPokedex = newPokedexList.sort((a, b) => { return a.id - b.id });

        const newPokemonsList = [...pokemons, pokemon]
        const orderedPokemons = newPokemonsList.sort((a, b) => { return a.id - b.id })

        setPokedex(orderedPokedex);
        setPokemons(orderedPokemons)
    }

    return (
        <div>
            <PokeCardContainer>
                <ImgContainer>
                    <PokeImg
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </ImgContainer>
                <ButtonsContainer>
                    <AddPokemon onClick={isPokedex ? removeFromPokedex : addToPokedex}>
                        {isPokedex ? "Remover da Pokédex" : "Adicionar à Pokédex"}
                    </AddPokemon>
                    <PokemonDetails onClick={() => goToPokemonDetail(navigate, pokemon.name)}>Ver detalhes</PokemonDetails>
                </ButtonsContainer>
            </PokeCardContainer>
        </div>
    )
}

export default PokemonCard;