function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs); //after get music by artist returns what are you doing with the objects?
  }
//need a draw, media tags for playbar, style for image, price artist
  //Start coding here
  var itunesService = new ItunesService ()

  function drawSongs(songsList){
    var template = ''
    var songElem = document.getElementById('song-list')

    for (var i = 0; i < songsList.length; i++) {
      var song = songsList[i];
      console.log(songsList);
      template += `
      <div class="col-xs-3 stuff">
          <h3>${song.artist}</h3>
          <img height="100" width="100" class="img-responsive" style="margin:0 auto;" src="${song.albumArt}"></img>
          <div onclick="${song.preview}">Song title: ${song.title}</div>
          <div>Album title: ${song.collection}</div>
          <div>Price: ${song.price}</div>
          <audio controls id="audio-box">
              <source src="${song.preview}" type="audio/mp4">
          </audio>
      </div>
      `
    }
    songElem.innerHTML = template
  }

    this.getMusicByArtist= function(){
    service.getMusicByArtist(drawSongs)
  }
}