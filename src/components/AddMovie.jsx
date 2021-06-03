import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
  }

    handleChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    }

    addMovie = (e) => {
      // eslint-disable-next-line react/prop-types
      const { onClick } = this.props;
      onClick(this.state);
      e.preventDefault();
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      });
    }

    // eslint-disable-next-line max-lines-per-function
    render() {
      const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
      return (
        <form data-testid="add-movie-form">
          <label htmlFor="title-label" data-testid="title-input-label">
            Título
            <input
              id="title-label"
              type="text"
              name="title"
              data-testid="title-input"
              value={ title }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="subtitle-label" data-testid="subtitle-input-label">
            Subtítulo
            <input
              id="subtitle-label"
              type="text"
              name="subtitle"
              data-testid="subtitle-input"
              value={ subtitle }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="image-label" data-testid="image-input-label">
            Imagem
            <input
              id="image-label"
              type="text"
              name="imagePath"
              data-testid="image-input"
              value={ imagePath }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="storyline-label" data-testid="storyline-input-label">
            Sinopse
            <textarea
              id="storyline-label"
              type="text"
              name="storyLine"
              data-testid="storyline-input"
              value={ storyLine }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="rating-label" data-testid="rating-input-label">
            Avaliação
            <input
              id="rating-label"
              type="number"
              data-testid="rating-input"
              name="rating"
              value={ rating }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              id="genre"
              data-testid="genre-input"
              name="genre"
              value={ genre }
              onChange={ this.handleChange }
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <button
            type="button"
            data-testid="send-button"
            onClick={ this.addMovie }
          >
            Adicionar filme
          </button>
        </form>
      );
    }
}

export default AddMovie;
