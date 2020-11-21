import React,{useState,useEffect} from "react";
//importing Components
//importing data
import Chillhop from "./Data"
//importing data

import Song from "./components/Song";
import Player from "./components/Player";
//importing  styles
import "./styles/App.scss";
function App() {
  //adding state
  const [songs, setSongs] = useState(Chillhop());
  return (
    <div className="">
      <Song />
      <Player />
    </div>
  );
}

export default App;
