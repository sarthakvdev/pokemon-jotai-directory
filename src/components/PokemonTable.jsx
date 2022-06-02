import { useAtom } from "jotai";
import { filteredPokemonAtom } from "../lib/atoms";

export default function PokemonTable() {
  const [filtedPokemon] = useAtom(filteredPokemonAtom);
  
  return (
    <table className="pokemon-table">
      <tbody>
        {filtedPokemon.map((p) => (
          <tr key={p.id}>
            <td>
              <a
                href={`https://www.pokemon.com/us/pokedex/${p.name.english.toLowerCase()}}`}
                target="_blank"
                rel="noreferrer"
              >
                {p.name.english}
              </a>
            </td>
            <td>{p.type.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}