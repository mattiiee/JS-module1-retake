//65130500091 Aismat Boonmalert
class Movies {
  constructor() {
    this.movies = []
  }
  getAllMovies() {
    return this.movies;
  }
  
  addMovie(title, director, year, genre) {
    const newMovie = {title, director, year, genre}

    if (!title , !director , !year , !genre) {
      return undefined
    } else if (this.movies.find((movie) => movie.title.toLowerCase() === title.toLowerCase()
        && movie.director.toLowerCase() === director.toLowerCase())) {
      return undefined
    } else{
      this.movies.push(newMovie)
      return newMovie
    }
  }
  
  updateMovie(title, updatedDetails) {
    const movieIndex = this.movies.findIndex((movie) => movie.title.toLowerCase()
      === title.toLowerCase())
  
    if (movieIndex === -1) {
      return undefined;
    }  
  
    const updatedMovie = {
      ...this.movies[movieIndex],
      ...updatedDetails,
    };
  
    this.movies[movieIndex] = updatedMovie;
    return updatedMovie;
  }
  
  deleteMovieByTitle(title) {
    const movieIndex = this.movies.findIndex((movie) =>
      movie.title.toLowerCase() === title.toLowerCase()
    );

    if (movieIndex === -1) {
      return "no movie deleted";
    }

    const deletedMovie = this.movies.splice(movieIndex, 1)[0];
    return deletedMovie;
  }
}


module.exports = Movies
