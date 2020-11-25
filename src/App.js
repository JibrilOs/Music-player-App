import React,{useState,useEffect} from "react";
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
  //adding state
  const [songs, setSongs] = useState(Chillhop);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  //this state controls the playing and pausing of the song
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <Library Songs={songs} SetCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
