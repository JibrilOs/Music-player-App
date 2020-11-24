import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  const currentSong = props.currentSong;

  //using ref helps me to target the audio element and select it
  //useRef creates and object with a current property field and assigns it to the audioRef
  const audioRef = useRef(null);

  //event handler
  const playSongHandler = (isPlaying, setIsPlaying) => {
    isPlaying = props.isPlaying;
    setIsPlaying = props.setIsPlaying;
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
//time handling event for the music
const timeUpDateHandler=(e)=>{
const current=e.target.currentTime // you can access the event and also check its methods and properties
const duration=e.target.duration
setSongInfo({...songInfo,currentTime:current,duration,})

}

// function to format the startingtime and ending time
const getTime=(time)=>{
  //this math.floor method formats the time into seconds and minutes
return Math.floor(time / 60) + ":" + ("0" +Math.floor(time % 60 )).slice(-2)
  
}

//function to make the range slider dragable
//first we add an onchange event to the input and create a state where we link the event.target.value of the event handler to the value of the input element

const handleDragAble=(e)=>{

  audioRef.current.currentTime=e.target.value // we also need to update the audioRef.Currentime to that of the value
 setSongInfo({
   ...songInfo,
   currentTime: e.target.value , //this makes it draggable,
   
 });
}

  //state for the currrent time for the player 
  //
   //fixing error of uncontrollable component  which th value of the input tag is null
   // when the app is renderred.to fix that we need to update the currentime value 

  
  
  //
  const [songInfo, setSongInfo] = useState({ currentTime: "", duration: 0 });

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
          icon={props.isPlaying === false ? faPlay : faPause}
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          className="skip-forward"
          size="3x"
          icon={faAngleRight}
        />
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpDateHandler}
        src={currentSong.audio}
        onLoadedMetadata={timeUpDateHandler} 
      ></audio>
    </div>
  );
};

export default Player;
