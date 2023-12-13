if (!title,!director , !year || !genre) {
        return undefined;
      }
  
      const duplicate = this.movies.find((movie) =>
        movie.title.toLowerCase() === title.toLowerCase() &&
        movie.director.toLowerCase() === director.toLowerCase()
      );
  
      if (duplicate) {
        return undefined;
      }
  
      const newMovie = {
        title,
        director,
        year,
        genre,
      };
  
      this.movies.push(newMovie);
      return newMovie;