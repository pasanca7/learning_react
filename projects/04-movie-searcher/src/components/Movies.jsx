function ListOfMovies ({ movies }) {
  return(
    <ul className="movies">
      {
        movies.map(movie => (
            <li className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={"Official poster of "+movie.Title}/>
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