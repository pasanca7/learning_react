function ListOfMovies ({ movies }) {
  return(
    <ul>
      {
        movies.map(movie => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={"Official poster of "+movie.Title}/>
            </li>
        ))
      }
    </ul>
  )
}

function RenderNoResult(){
  return(
    <p>Results not found</p>
  )
}

export function Movies({movies}){
    const hasMovies = movies?.length > 0
    return (
      hasMovies
      ? <ListOfMovies movies={movies}/>
      : <RenderNoResult/>
    )
}