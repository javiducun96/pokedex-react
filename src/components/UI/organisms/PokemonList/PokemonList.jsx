import { PokemonCard } from "../PokemonCard"
import "./styles.css"

export const PokemonList = ({ pokemons }) => {
  return (
    <div class="pokemons-list">
      {pokemons.map((pokemonId) => (
        <PokemonCard pokemonId={pokemonId} />
      ))}
    </div>
  )
}
