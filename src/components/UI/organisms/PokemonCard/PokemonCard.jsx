import { PokemonAtributtes } from "../../molecules/PokemonAtributtes"
import "./styles.css"

export const PokemonCard = ({ pokemon }) => {
  const mainType = pokemon?.types[0]
  return (
    <article className={`card type-${mainType}`}>
      <div className="card-header">
        <span className="pokemon-name">{pokemon?.name}</span>
        <span className="pokemon-number">{pokemon?.number}</span>
      </div>
      <PokemonAtributtes pokemon={pokemon} />
    </article>
  )
}
