import React, { useEffect, useState } from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import TopBlogs from '../TopBlogs/TopBlogs';

import './TopPlayers.css';

const TopPlayers = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
      .then((res) => res.json())
      .then((data) => setPlayers(data.results));
  }, []);
  return (
    <div className="container">
      <div className="top__players">
        <h1 className="heading">Top Players</h1>
      </div>
      <div className="player__single">
        {players.map((player) => (
          <SinglePlayer key={player.id.value} player={player} />
        ))}
      </div>
      <TopBlogs />
    </div>
  );
};

export default TopPlayers;
