import styled from "styled-components";
import { backgroundCard, backgroundDetailsButton, backgroundAddButton } from '../../constants/colors'


export const PokeCardContainer = styled.div`
  height: 35vh;
  width: 250px;
  margin: 10px;
  display: grid;
  grid-template-rows: 90% 10%;
`;

export const ImgContainer = styled.div`
  display: flex;
  background: ${backgroundCard};
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 12px;
  border: solid 1px lightgray;
`;

export const PokeImg = styled.img`
  height: 60%;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const AddPokemon = styled.button`
  background: ${backgroundAddButton};
  border: none;
  border-radius: 5px;
margin: 0 3px;
  padding: 3px;
`
export const PokemonDetails = styled.button`
  background: ${backgroundDetailsButton};
  border: none;
  border-radius: 5px;
`
