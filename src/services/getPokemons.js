export async function getPokemons(limit = 9999) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
  return response
}
