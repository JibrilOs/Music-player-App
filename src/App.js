import React, { useState, useRef } from "react";
//importing Components
//importing data
import Chillhop from "./Data"
//importing data

import Song from "./components/Song";
import Player from "./components/Player";
//importing  styles
import "./styles/App.scss";
import Library from "./components/Library";
function App() {
  //todo======Audi0Ref=================
  //using useRef helps me to target the audio element and select it
  //useRef creates and object with a current property field and assigns it to the audioRef
  const audioRef = useRef(null);
  // console.log(audioRef,    "here is audioref");;;;

  //comment ======AudioRef=================

  //comment ========Adding States Beginning==========

  const [songs, setSongs] = useState(Chillhop);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  //state for the currrent time for the player
  //
  //fixing error of uncontrollable component  which the value of the input tag is null
  // when the app is renderred.to fix that we need to update the currentime value

  //
  const [songInfo, setSongInfo] = useState({ currentTime: "", duration: 0 });

  //this state controls the playing and pausing of the song
  const [isPlaying, setIsPlaying] = useState(false);

  //comment ========Adding States Ending===========

  //comment ========EventHandlers Beginning========

  //time handling event for the music
  const timeUpDateHandler = (e) => {
    const current = e.target.currentTime; // you can access the event and also check its methods and properties
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  //comment========EventHandlers Ending========

  return (
    <div className="">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />

      <Library
        Songs={songs}
        SetCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
      />
      <audio
        ref={audioRef}
        onTimeUpdate={timeUpDateHandler}
        src={currentSong.audio}
        onLoadedMetadata={timeUpDateHandler} // this event handle uploads the the time duration of the music
      ></audio>
    </div>
  );
}

export default App;
