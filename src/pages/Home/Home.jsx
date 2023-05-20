import React, { useState } from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import usePokemons from "../../hooks/usePokemons"
import lookForPhoto from "../../assets/images/icons/look-for.svg"
import PokeballPhoto from "../../assets/images/icons/pokeball.svg"
import GitHubPhoto from "../../assets/images/icons/github.svg"
import PokeAPIPhoto from "../../assets/images/icons/pokeapi.svg"
import ShinyPhoto from "../../assets/images/icons/shiny.png"

export const Home = () => {
  // Custom hook for retrive pokemons info -> https://react.dev/learn/reusing-logic-with-custom-hooks
  const { pokemons, loading, error } = usePokemons()
  const [filter, setFilter] = useState({ text: "", shinyPhoto: true })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const lowerFilter = filter.text.toLowerCase()
  const filteredPokemons = pokemons.filter(
    (pokemon) => {
      const pokemonNameContainsFilter = pokemon.name.includes(lowerFilter)
      const pokemonTypeExactMatch = pokemon.types.includes(lowerFilter)
      return pokemonNameContainsFilter || pokemonTypeExactMatch
    }
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
            onChange={(event) => setFilter({...filter, text: event.target.value})}
            value={filter.text}
          />
        </div>
        <div className="filter-shiny">
          <button className={filter.shinyPhoto ? "active" : "inactive"} type="button" onClick={(event) => setFilter({...filter, shinyPhoto: !filter.shinyPhoto})}>
            <span className="shiny-text">Shiny</span>
            <img className="shiny-icon" src={ShinyPhoto} alt="shiny" />
          </button>
        </div>
      </div>
      <div className="pokemon-list-container">
        <PokemonList pokemons={filteredPokemons} useShinyPhoto={filter.shinyPhoto} />
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
