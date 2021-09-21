import React from 'react';
import './SinglePlayer.css';

const SinglePlayer = (props) => {
  console.log(props.player.picture.medium);
  const { title, first, last } = props.player.name;
  return (
    <div className="players">
      <div className="single__player">
        <div className="player__img">
          <img src={props.player.picture.medium} alt="" />
        </div>
        <div className="players__info">
          <h4 className="playe__name">
            {title} {first} {last}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
