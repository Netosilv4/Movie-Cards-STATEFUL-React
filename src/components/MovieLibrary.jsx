import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor({ movies }) {
    super();
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
      movies,
      filtered: [...movies],
    };
  }

  handleChange = ({ target: { value, name, checked } }) => {
    this.filter(checked, value, name);
    return name === 'bookMarkedOnly'
      ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
  }

  handleAddMovie(newMovie) {
    this.setState(({ movies }) => ({
      movies: [...movies, newMovie],
    }));
    this.setState(({ movies }) => ({
      filtered: [...movies],
    }));
  }

  filter(checked, value, name) {
    const { movies } = this.state;
    if (checked === true) {
      this.setState({
        filtered: movies.filter((movie) => movie.bookmarked === true),
      });
    } else if (value === 'action' || value === 'fantasy' || value === 'comedy') {
      this.setState({
        filtered: movies.filter((movie) => movie.genre === value),
      });
    } else if (name === 'searchText' && value !== '') {
      this.setState({
        filtered: movies.filter((movie) => movie.title.toUpperCase()
          .includes(value.toUpperCase())
        || movie.storyline.toUpperCase().includes(value.toUpperCase())
        || movie.subtitle.toUpperCase().includes(value.toUpperCase())),
      });
    } else {
      this.setState({
        filtered: movies,
      });
    }
  }

  render() {
    const { searchText, bookMarkedOnly, selectedGenre, filtered } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookMarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList className="cardWrapper" movies={ filtered } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
export default MovieLibrary;
