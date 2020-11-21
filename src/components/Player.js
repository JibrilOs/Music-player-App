import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";


const Player = (props) => {
  const song1 = props.song;
  const [play, setPlay] = useState([]);
  const [play0, setPlay0] = useState(song1);
  const play1 = () => {

    return(
setPlay()


    )
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start time</p>
        <input type="range" />
        <p>End time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="3x"
          icon={faPlay}
          onClick={play1}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="3x"
          icon={faAngleRight}
        />
      </div>

    </div>
  );
};

export default Player;
