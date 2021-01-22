import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  Songs,
  SetCurrentSong,
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  return (
    <div className="library-container">
      <h2>Library</h2>
      <div className="librarysongs-container">
        {Songs.map((song) => {
          return (
            <LibrarySong
              Song={song}
              key={song.id}
              SetCurrentSong={SetCurrentSong}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
