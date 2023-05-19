import { PokemonCard } from "../PokemonCard"
import "./styles.css"

export const PokemonList = ({ pokemons }) => {
  return (
    <div class="pokemons-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  )
}
