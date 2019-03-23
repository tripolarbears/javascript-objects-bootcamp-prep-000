var playlist = { artistName: "songTitle" };

function updatePlaylist(object, artistName, songTitle) {
  playlist.assign({object}, {artistName}, {songTitle})
  return playlist
}