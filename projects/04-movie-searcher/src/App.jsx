import './App.css'
import { useEffect, useRef, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search ==''
      return
    }
    if (search == '') {
      setError('Please, fulfil the textbox.')
      return
    }
    setError(null)
  }, [search])

  return {search, updateSearch, error, setError}
}

function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error, setErrorr} = useSearch()
  const {movies, getMovies, isLoading} = useMovies({search, sort})


  /* No controlado
  const handleSubmit = (event) => {
    event.preventDefault()
    const { search } = Object.fromEntries(new window.FormData(event.target))
  }*/

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie searcher</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name='search' placeholder="A new Hope, Shrek, Titanic..." />
            <input type='checkbox' onChange={handleSort} checked={sort}/>
            <button type='submit' >Search</button>
          </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </header>
        <main>
          {
            isLoading
            ? "Loading..."
            : <Movies movies={movies}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
