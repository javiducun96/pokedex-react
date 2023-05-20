import { useEffect, useState } from "react"
import getPokemons from "../services/getPokemons"
const usePokemons = () => {
  const [pokemons, setPokemons] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(undefined)

  useEffect(() => {
    getPokemons(1400).then((data) => {
      setPokemons(data)
      setLoading(false)
      setError("")
    })
  }, [])
  return { pokemons, loading, error }
}
export default usePokemons
