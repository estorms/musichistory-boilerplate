var songs = [];


function getSongs (useSongs) {
  return new Promise ( function () {
    $.ajax({
      url: 'js/songs.json'
    }).done(function (songData) {
      for (var song in songData) {
        songs.push(songData[song])
      }
      useSongs(songs)
    })
  })
}

function useSongs(songs) {
    console.log(songs);
    songs[0].forEach(function(song) {
        console.log(song)
    $('#songbox').append(`<div>Song Title: ${song.title}</div><div>By: ${song.artist}</div><div>Album: ${song.album}</div>`)


    // $('#songbox').append(`${song}.title`);
});
};

getSongs(useSongs)


















// console.log('factory built');

// var music = (function() {
// songs1 = []
// songs2 = []

// // var Predator = (function () {
// //   var carnivores = []
// //   var herbivores = []

// return {
//     getSongs1: function(functionToBeInvoked) {
//     var xhr = new XMLHttpRequest()
//       xhr.open('GET', 'songs1.json')
//       xhr.addEventListener('load', function (evt) {
//         songs1 = JSON.parse(evt.target.responseText)
//         functionToBeInvoked(songs1)
//       })
//       xhr.send()
//     },

//     getSongs2: function(functionToBeInvoked) {
//     var xhr = new XMLHttpRequest()
//       xhr.open('GET', 'songs2.json')
//       xhr.addEventListener('load', function (evt) {
//         songs2 = JSON.parse(evt.target.responseText)
//         functionToBeInvoked(songs2)
//       })
//       xhr.send()

//     }
// }

// }())

