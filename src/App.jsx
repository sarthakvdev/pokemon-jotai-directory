/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Provider } from "jotai";
import "./App.css";

import PokemonTable from "./components/PokemonTable";
import InputFilter from "./components/InputFilter";

function App() {
  return (
    <div className="App">
      <InputFilter />
      <div className="pokemon-container">
        <PokemonTable />
      </div>
    </div>
  );
}

export default () => (
  <Provider>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </Provider>
);
