import React from "react"
import PokemonCard from "../../components/UI/organisms/PokemonCard/PokemonCard"
import bulbasaurPhoto from "../../assets/images/pokemons/bulbasaur.png"
import charmanderPhoto from "../../assets/images/pokemons/charmander.png"
import butterfreePhoto from "../../assets/images/pokemons/butterfree.png"
import gastlyPhoto from "../../assets/images/pokemons/gastly.png"
import pikachuPhoto from "../../assets/images/pokemons/pikachu.png"
import squirtlePhoto from "../../assets/images/pokemons/squirtle.png"

export const Home = () => {
  const pokemons = [
    {
      name: "Bulbasaur",
      number: "#001",
      types: ["grass", "poison"],
      weight: 6.9,
      height: 0.7,
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      image: bulbasaurPhoto,
    },
    {
      name: "Charmander",
      number: "#004",
      types: ["fire"],
      weight: 8.5,
      height: 0.6,
      description:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      image: charmanderPhoto,
    },
    {
      name: "Squitle",
      number: "#007",
      types: ["water"],
      weight: 9.0,
      height: 0.5,
      description:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      image: squirtlePhoto,
    },
    {
      name: "Bulbasaur",
      number: "#001",
      types: ["grass", "poison"],
      weight: 6.9,
      height: 0.7,
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      image: bulbasaurPhoto,
    },
    {
      name: "Charmander",
      number: "#004",
      types: ["fire"],
      weight: 8.5,
      height: 0.6,
      description:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      image: charmanderPhoto,
    },
    {
      name: "Squitle",
      number: "#007",
      types: ["water"],
      weight: 9.0,
      height: 0.5,
      description:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      image: squirtlePhoto,
    },
  ]
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </>
  )
}
