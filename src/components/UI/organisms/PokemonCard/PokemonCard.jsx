import { PokemonAtributtes } from "../../molecules/PokemonAtributtes"
import "./styles.css"

const PokemonCard = ({ pokemon }) => {
  return (
    <article className="card type-grass">
      <div className="card-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-number">{pokemon.number}</span>
      </div>
      <PokemonAtributtes pokemon={pokemon} />
    </article>
  )
}

export default PokemonCard
