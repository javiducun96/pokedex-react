import React from "react"
import "./styles.css"
import { PokemonList } from "../../components/UI/organisms/PokemonList"
import usePokemons from "../../hooks/usePokemons"

export const Home = () => {
  const { pokemons, loading, error } = usePokemons()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return <PokemonList pokemons={pokemons} />
}
