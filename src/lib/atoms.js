import { atom } from "jotai";

/* 
  Note:
  Created Atoms ie. pokemonAtom, filterAtom and filteredPokemonAtom
  All these are globally accessible from a hook `useAtom`
  which is like `useState` but global
  Atom uses a bottom-up approach.
*/

const URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

export const pokemonAtom = atom(async () =>
  fetch(URL).then((res) => res.json())
);

export const filterAtom = atom("");

export const filteredPokemonAtom = atom((get) =>
  get(pokemonAtom).filter((p) =>
    p.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);
