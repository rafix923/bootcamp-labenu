/* eslint-disable no-unreachable */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from './styled';
import { goToPokedex } from '../../routes/coordinator'

// Recebendo as informações por props
function Header({ leftButtonFunction, title, showRightButton }) {

  const navigate = useNavigate()

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokémons":
        return "Ir para Pokédex";
      case "Pokédex":
        return "Voltar para lista de pokémons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderContainer>
      <LeftHeaderButton onClick={leftButtonFunction}>
        {leftButtonTitle()}
      </LeftHeaderButton>
      <h1>{title}</h1>
      {/* Para só mostrar o botão da direita se a condição for verdadeira */}
      {showRightButton && (
        <RightHeaderButton onClick={() => goToPokedex(navigate)}>
          Ir para pokédex
        </RightHeaderButton>
      )}
    </HeaderContainer>
  )
}

export default Header;