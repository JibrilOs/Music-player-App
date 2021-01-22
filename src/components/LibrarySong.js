import React from "react";

const LibrarySong = ({
  Song,
  SetCurrentSong,
  audioRef,
  setIsPlaying,
  isPlaying,
}) => {
  const selectMusicHandler = () => {
    // const selectsong = Songs.filter((song, id) => {
    //   return id === Id;
    // });
    //when we click on the div it selects only that particular song and hence we can update the currentSong
    SetCurrentSong(Song);
    

    // return audioRef.current.play();

     if(isPlaying){
       const autplay = (audioRef.current.autoplay = true);
       setIsPlaying(true)
       return autplay
     }
     return setIsPlaying(false)
};
  return (
    <div className="librarysong-container" onClick={selectMusicHandler}>
      <img src={`${Song.cover}`} alt={Song.artist} />
      <div className="song-descriptions">
        <h3>{Song.name}</h3>
        <h4>{Song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
