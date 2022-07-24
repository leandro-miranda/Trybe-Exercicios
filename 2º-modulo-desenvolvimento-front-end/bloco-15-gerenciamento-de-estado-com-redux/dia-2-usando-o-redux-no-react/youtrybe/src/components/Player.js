import React from 'react';
import { connect } from 'react-redux';

function Player(props) {
  const { categoria, filme } = props;
  return (
    <div className="player">
      <fieldset>
        <legend>Player</legend>
        <h1>{categoria.name}</h1>
        <h2>{filme.title}</h2>
        <h3>{filme.released}</h3>
        {/* <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/tFMo3UJ4B4g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
      </fieldset>
    </div>
  );
}

const mapStateToProps = (store) => ({
  filme: store.movieReducer.selectedMovie,
  categoria: store.movieReducer.selectedCategory,
});

export default connect(mapStateToProps)(Player);
