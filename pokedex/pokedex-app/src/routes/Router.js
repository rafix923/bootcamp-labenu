import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="pokedex/detailspage" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}