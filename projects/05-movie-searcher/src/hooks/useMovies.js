import withResults from '../mock/with_results.json'
import withoutResults from '../mock/no_results.json'
import { useState } from 'react'

const API_KEY = 'TODO:add_in_env'

export function useMovies({search}){
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if(search){
      //setResponseMovies(withResults)
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then(res => res.json())
      .then(json => {
        setResponseMovies(json)
      })
    } else {
      setResponseMovies(withoutResults)
    }
  }

  return {movies: mappedMovies, getMovies}
  }


  