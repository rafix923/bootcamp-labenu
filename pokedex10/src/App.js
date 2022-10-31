import React from "react";
import GlobalState from "./global/GlobalState";
import { Router } from './routes/Router'

function App() {
  return (
    // Para receber os dados do GlobalStateContext (provider)
    <GlobalState>
      <Router />
    </GlobalState>
  )
}

export default App;