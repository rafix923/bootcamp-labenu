import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonListScreen  from "../screens/PokemonListScreen/PokemonListScreen";
import  PokedexScreen  from "../screens/PokedexScreen/PokedexScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen/PokemonDetailScreen"

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<PokemonListScreen />} />
        <Route path="pokedex" element={<PokedexScreen />} />
        <Route path="pokemon/:name" element={<PokemonDetailScreen />} />
      </Routes>
    </BrowserRouter>
  )
}