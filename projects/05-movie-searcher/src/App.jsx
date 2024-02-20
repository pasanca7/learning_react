import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import withResults from './mock/with_results.json'
import withoutResults from './mock/no_results.json'


function App() {
  const movies = withResults.Search

  return (
    <>
      <div className='page'>
        <header>
          <h1>Movie searcher</h1>
          <form className='form'>
            <input placeholder="A new Hope, Shrek, Titanic..." />
            <button type='submit'>Search</button>
          </form>
        </header>
        <main>
           <Movies movies={movies}/>
        </main>
      </div>
    </>
  )
}

export default App
