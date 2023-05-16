import { PokemonAtributtes } from "../../molecules/PokemonAtributtes"
import "./styles.css"

const PokemonCard = (props) => {
  const types = ["grass", "poison"]
  return (
    <article className="card type-grass">
      <div className="card-header">
        <span className="pokemon-name">Bulbasaur</span>
        <span className="pokemon-number">#001</span>
      </div>
      <PokemonAtributtes types={types} />
    </article>
  )
}

export default PokemonCard
