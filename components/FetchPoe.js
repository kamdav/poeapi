import React, { Component } from 'react';

export class FetchPoe extends Component {
  state = {
    loading: true,
    players: [],
  }

  async componentDidMount() {
    const url = "http://api.pathofexile.com/ladders/Metamorph?offset=0&limit=100";
    const response = await fetch(url);
    const data = await response.json();
    // const playerList = data.entries.map(players => data + ' this is a player');
    console.log(data);

    this.setState({ players: data.entries, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Players loading...</div>
    }

    if (!this.state.players.length) {
      return <div>No players found.</div>
    }

    const playersElementalist = [];
    const playersRanger = [];
    // const playersJuggernaut = [];
    // const playersBerserker = [];

    this.state.players.forEach(players => {
      if (players.character.class === 'Elementalist') {
          playersElementalist.push (
            <div key={players.character.id}>
              <div>{players.character.name}</div>
              <div>{players.character.class}</div>
              <div>{players.character.level}</div>
            </div>
          );
      } else if (players.character.class === ('Deadeye' || 'Raider' || 'Pathfinder')) {
        playersRanger.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
    }
    });

    return (      
      <div>
        {playersRanger}
      </div>      
    );
  }
}


export default FetchPoe