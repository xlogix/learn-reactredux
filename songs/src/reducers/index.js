import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song1", duration: "1:30" },
    { title: "Song2", duration: "2:40" },
    { title: "Song3", duration: "3:50" },
    { title: "Song4", duration: "4:50" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
