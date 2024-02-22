import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }){
  const [movies, setmovies] = useState([])
  const [loading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSerach = useRef(search)

  const getMovies = async () => {
    if (search == previousSerach.current) return
    try {
      setIsLoading(true)
      setError(null)
      previousSerach.current = search
      const newMovies = await searchMovies({ search })
      setmovies(newMovies)
    } catch(e){
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a,b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies])
  
  return {movies: sortedMovies, getMovies, loading}
}
  