import React, { useState } from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import usePokemons from "../../hooks/usePokemons"
import lookForPhoto from "../../assets/images/icons/look-for.svg"
import PokeballPhoto from "../../assets/images/icons/pokeball.svg"
import GitHubPhoto from "../../assets/images/icons/github.svg"
import PokeAPIPhoto from "../../assets/images/icons/pokeapi.svg"

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
    <>
      <header>
        <img className="pokeball-icon" src={PokeballPhoto} alt="pokeball" />
        <h1>My Pokédex</h1>
      </header>
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
      <footer>
        <a href="https://github.com/javiducun96/pokedex-react" target="_blank" rel="noreferrer">
          <img className="footer-icon" src={GitHubPhoto} alt="github" />
        </a>
        <div className="divider" />
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          <img className="footer-icon" src={PokeAPIPhoto} alt="pokeAPI" />
        </a>
      </footer>
    </>
  )
}
