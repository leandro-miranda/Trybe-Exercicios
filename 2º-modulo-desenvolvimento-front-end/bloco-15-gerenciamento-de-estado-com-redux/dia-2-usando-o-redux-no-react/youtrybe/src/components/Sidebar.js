import React, { Component } from 'react';
import { connect } from 'react-redux';
import movieAction from '../redux/actions/movieActions';

class Sidebar extends Component {
  render() {
    const { categories, watchMovie } = this.props;
    return (
      <aside>
        <fieldset>
          <legend>Sidebar</legend>
          {categories.map((category) => (
            <div key={ category.id }>
              <h3>{category.name}</h3>
              <ul>
                {category.movies.map((movie) => (
                  <li key={ movie.id }>
                    {movie.title}
                    {' '}
                    was released in
                    {' '}
                    {movie.released}
                    <button
                      type="button"
                      onClick={ () => watchMovie(category, movie) }
                    >
                      Assistir
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </fieldset>
      </aside>
    );
  }
}

const mapStateToProps = (store) => ({
  categories: store.movieReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  watchMovie: (category, movie) => dispatch(movieAction(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
