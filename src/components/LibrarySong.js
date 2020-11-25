import React from "react";

const LibrarySong = ({ Song, Id, SetCurrentSong, Songs }) => {
const selectMusicHandler = (Id) => {
  // const selectsong = Songs.filter((song, id) => {
  //   return id === Id;
  // });
  // //  const sel=selectsong
    console.log(Song);

        return SetCurrentSong(Song);
};
  return (
    <div

           className="librarysong-container"

           onClick={()  =>  {
        
        selectMusicHandler(Id);
      ;
      }}
    
    >
      <img src={`${Song.cover}`} alt={Song.artist} />

      <div className="song-descriptions">
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
