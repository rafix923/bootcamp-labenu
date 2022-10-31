import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListScreen from '../screens/PokemonListScreen/PokemonListScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen/PokemonDetailScreen';
import PokedexScreen from "../screens/PokedexScreen/PokedexScreen";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<PokemonListScreen />} />
        <Route path="/pokemon/:name" element={<PokemonDetailScreen />} />
        <Route path="pokedex" element={<PokedexScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
