import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "3oEjI5cv4VV2GIobBu"
    };

    this.search('Titus');
  }


  search = (query) => {
    const gifKey = process.env.REACT_APP_GIF_API_KEY;

    giphy(gifKey).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

    selectGif = (id) => {
      this.setState({
        selectedGifID: id
      });
    }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
