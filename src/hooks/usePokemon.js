import { useEffect, useState } from "react"
const usePokemon = (pokemonId) => {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  function getImageFromApiResponse(apiResponse) {
    console.log({ asd: apiResponse })
    let image = apiResponse?.sprites?.other?.["official-artwork"]?.front_default
    if (image) return image

    image = apiResponse?.sprites?.other?.dream_world?.front_default
    if (image) return image
  }

  useEffect(() => {
    function mapPokemon(apiResponse) {
      const pokemon = {
        name: apiResponse.name,
        number: apiResponse.id,
        types: apiResponse.types.map((type) => type.type.name),
        weight: apiResponse.weight,
        height: apiResponse.height,
        description:
          "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        image: getImageFromApiResponse(apiResponse),
      }
      return pokemon
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    if (!pokemonId) {
      setError("pokemonId not defined on usePokemon")
      setLoading(false)
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error)
        setPokemon(mapPokemon(data))
        setLoading(false)
      })
  }, [pokemonId])
  return { pokemon, loading, error }
}
export default usePokemon
