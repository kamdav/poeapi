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

    this.setState({ players: data.entries, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Players loading...</div>
    }

    if (!this.state.players.length) {
      return <div>No players found.</div>
    }

    const playersWitch = [], playersRanger = [], playersMarauder = [], playersDuelist = [], playersShadow = [],  playersTemplar = [], playersScion = [];

    let rangers = ['Deadeye', 'Pathfinder', 'Raider'];
    let witchs = ['Necromancer', 'Occultist', 'Elementalist'];
    let marauders = ['Juggernaut', 'Berserker', 'Chieftain'];
    let duelists = ['Slayer', 'Gladiator', 'Champion'];
    let shadows = ['Assassin', 'Saboteur', 'Trickstar'];
    let templars = ['Inquisitor', 'Hierophant', 'Guardian'];
    let scions = ['Ascendant'];


    this.state.players.forEach(players => {
      if (witchs.includes(players.character.class)) {
          playersWitch.push (
            <div key={players.character.id}>
              <div>{players.character.name}</div>
              <div>{players.character.class}</div>
              <div>{players.character.level}</div>
            </div>
          );
      } else if (rangers.includes(players.character.class)) {
        playersRanger.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
      } else if (marauders.includes(players.character.class)) {
        playersMarauder.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
      } else if (duelists.includes(players.character.class)) {
        playersDuelist.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
      } else if (shadows.includes(players.character.class)) {
        playersShadow.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
      } else if (templars.includes(players.character.class)) {
        playersTemplar.push (
          <div key={players.character.id}>
            <div>{players.character.name}</div>
            <div>{players.character.class}</div>
            <div>{players.character.level}</div>
          </div>
        );
      } else if (scions.includes(players.character.class)) {
        playersScion.push (
          {
            name: [players.character.name],
            class: [players.character.class],
            level: [players.character.level],
            isVisible: false,
          }
          // <div key={players.character.id}>
          //   <div>{players.character.name}</div>
          //   <div>{players.character.class}</div>
          //   <div>{players.character.level}</div>
          // </div>
        );
        console.log({playersScion});
      }
    });


    return (      
      <div>{playersTemplar}</div>
    );
  }
}

export default FetchPoe;