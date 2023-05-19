async function fetchPokemons(limit = 10) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit
  const res = await fetch(url)
  const data = await res.json()
  const extendedPokemon = await getPokemonsExtendedInfo(data.results)
  return extendedPokemon
}

async function getPokemonsExtendedInfo(pokemons) {
  const getPokemon = (pokemon) => {
    const response = fetch(pokemon.url)
      .then((res) => res.json())
      .then((data) => mapPokemon(data))
    return response
  }

  const extendedPokemons = await Promise.all(pokemons.map(getPokemon))

  return extendedPokemons
}

function getImageFromApiResponse(apiResponse) {
  let image = apiResponse?.sprites?.other?.["official-artwork"]?.front_default
  if (image) return image

  image = apiResponse?.sprites?.other?.dream_world?.front_default
  if (image) return image
}

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

export default fetchPokemons
