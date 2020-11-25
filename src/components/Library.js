import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ Songs, SetCurrentSong }) => {
  return (
    <div className="library-container">
      <h2>Library</h2>
      <div className="librarysongs-container">
        { Songs.map((song,  id) => {
          return (
            <LibrarySong
              Song={song}
              key={song.id}
              Id={id}
              SetCurrentSong={SetCurrentSong}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
