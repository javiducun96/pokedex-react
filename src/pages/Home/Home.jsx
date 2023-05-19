import React, { useState } from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import usePokemons from "../../hooks/usePokemons"

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
      <input
        type="text"
        onChange={(event) => setFilter(event.target.value)}
        value={filter}
      ></input>
      <PokemonList pokemons={filteredPokemons} />
    </div>
  )
}
