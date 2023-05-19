import React, { useState } from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import usePokemons from "../../hooks/usePokemons"
import lookForPhoto from "../../assets/images/icons/look-for.svg"

export const Home = () => {
  const { pokemons, loading, error } = usePokemons()
  const [filter, setFilter] = useState("")

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const lowerFilter = filter.toLowerCase()
  const filteredPokemons = pokemons.filter(
    (poke) =>
      poke.name.includes(lowerFilter) || poke.types.includes(lowerFilter)
  )

  return (
    <div>
      <div className="filter-panel">
        <div className="filter-name">
          <img className="lookfor-icon" src={lookForPhoto} alt="search" />
          <input
            id="filter-name"
            className="filter-textbox"
            type="text"
            onChange={(event) => setFilter(event.target.value)}
            value={filter}
          ></input>
        </div>
      </div>
      <div className="pokemon-list-container">
        <PokemonList pokemons={filteredPokemons} />
      </div>
    </div>
  )
}
