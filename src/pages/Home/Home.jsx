import React from "react"
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard"

export const Home = () => {
  const pokemon = {
    name: "Bulbasaur",
    number: "#001",
    types: ["grass", "poison"],
    weight: 6.9,
    height: 0.7,
  }
  return <PokemonCard pokemon={pokemon} />
}
