import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../../routes/coordinator';
import { PokedexHeader } from './styles';


function Pokedex() {

    const navigate = useNavigate();
    
    return (
        <PokedexHeader>
            <button onClick={() => goToHomePage(navigate)}>Voltar para a Home</button>
            <h1>Pokedex</h1>
        </PokedexHeader>

    )
}

export default Pokedex