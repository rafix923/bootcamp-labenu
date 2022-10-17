import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokemonListScreen } from '../../routes/coordinator';
import { PokedexHeader } from './styles';


function PokedexScreen() {

    const navigate = useNavigate();
    
    return (
        <PokedexHeader>
            <button onClick={() => goToPokemonListScreen(navigate)}>Voltar para a Home</button>
            <h1>Pokedex</h1>
        </PokedexHeader>

    )
}

export default PokedexScreen;