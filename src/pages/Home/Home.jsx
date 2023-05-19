import React from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"

export const Home = () => {
  const pokemons = Array.from({ length: 1000 }, (_, i) => i + 1)

  return <PokemonList pokemons={pokemons} />
}
