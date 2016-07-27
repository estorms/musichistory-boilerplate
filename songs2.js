function updateSongs() {

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Starman, by David Bowie", "Kenny G's Greatest Hits, by Kenny G")

songs.forEach(outputSongs);

function outputSongs(song) {
    // var updated = [];
    songs = song.replace('>', '-').replace(/[@/\(/!/\*/]/g,'').split('-');
    console.log(songs);

}};



updateSongs();

function addToDOM() {
    for (var i = 0; i < 8; i++) {
    var h2 = document.createElement("h2");
    var node = document.createTextNode('Song Title');
    h2.appendChild(node);
    var appendTo = document.getElementById('songbox');
    appendTo.appendChild(h2);
}};

addToDOM();









