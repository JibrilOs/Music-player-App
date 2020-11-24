import React from "react";

const LibrarySong = ({ Song }) => {
  return (
    <div className="librarysong-container">
      <img src={`${Song.cover}`} alt={Song.artist} />

      <div className="song-descriptions">
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
