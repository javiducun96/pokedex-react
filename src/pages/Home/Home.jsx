import React from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"

export const Home = () => {
  const pokemons = [
    1,2,3,4,5,6,7,8,9,10
  ]

  return <PokemonList pokemons={pokemons} />
}
