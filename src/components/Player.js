import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ isPlaying, setIsPlaying, audioRef, songInfo,setSongInfo }) => {
  //event handler
  const playSongHandler = () => {
    if (isPlaying) {
      // if isplaying ====true then we invoke the pause method on the audioref.current
      // if isplaying ====true then we invoke the pause method on the audioref.current
      setIsPlaying(!isPlaying); //this acts as a switch that updates the isplaying state
      //over here we are applying pause() method to the audioref current property
      audioRef.current.pause();
    } else {
      // if isplaying ====false then we invoke the pause method on the audioref.current
      setIsPlaying(!isPlaying);

      audioRef.current.play();
    }
  };

  // function to format the startingtime and ending time
  const getTime = (time) => {
    return (

      //this math.floor method formats the time into seconds and minutes
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  //function to make the range slider dragable
  //first we add an onchange event to the input and create a state where we link the event.target.value of the event handler to the value of the input element

  const handleDragAble = (e) => {
    audioRef.current.currentTime = e.target.value; // we also need to update the audioRef.Currentime to that of the value
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value, //this makes it draggable,
    });
  };

 

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={handleDragAble}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon
          className="play"
          size="3x"
          icon={isPlaying === false ? faPlay : faPause}
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="3x"
          icon={faAngleRight}
        />
      </div>

      <h5 className="round"> </h5>
    </div>
  );
};

export default Player;
