import React, { Component } from 'react';

class Gif extends Component {
  select = (event) => {
    this.props.selectGif(this.props.id);
  }
  render() {
    const src = `https://i.giphy.com/${this.props.id}.gif`;
    return (
      <img className="gif" src={src} onClick={this.select}/>
    );
  }
}

export default Gif;
