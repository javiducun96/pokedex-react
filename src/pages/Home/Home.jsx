import React from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import { getPokemons } from "../../services/getPokemons"

export const Home = () => {
  const pokemonsv2 = getPokemons(2000)
  const pokemons = Array.from({ length: 1000 }, (_, i) => i + 1)

  return <PokemonList pokemons={pokemons} />
}
