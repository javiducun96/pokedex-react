import { PokemonCard } from "../PokemonCard"
import "./styles.css"

export const PokemonList = ({ pokemons, useShinyPhoto }) => {
  return (
    <div class="pokemons-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} useShinyPhoto={useShinyPhoto} />
      ))}
    </div>
  )
}
