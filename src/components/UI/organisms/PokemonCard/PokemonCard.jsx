import usePokemon from "../../../../hooks/usePokemon"
import { PokemonAtributtes } from "../../molecules/PokemonAtributtes"
import "./styles.css"

export const PokemonCard = ({ pokemonId }) => {
  const { pokemon, loading, error } = usePokemon(pokemonId)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const mainType = pokemon?.types[0]
  const numberToText = (num) => "#" + num.toString().padStart(3, "0")

  return (
    <article className={`card type-${mainType}`}>
      <div className="card-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-number">{numberToText(pokemon.number)}</span>
      </div>
      <PokemonAtributtes pokemon={pokemon} />
    </article>
  )
}
