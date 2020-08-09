var playlist = { artistNames: "songTitles" };

function updatePlaylist(playlist, artistNames, songTitles) {
  playlist[artistNames] = songTitles
 
  return playlist
}