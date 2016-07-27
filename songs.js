(function() {

function addToDOM() {
    var h2 = document.createElement("h2");
    var node = document.createTextNode('Song Title');
    h2.appendChild(node);
    var appendTo = document.getElementById('songbox');
    appendTo.appendChild(h2);
};

addToDOM();

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Starman, by David Bowie", "Kenny G's Greatest Hits, by Kenny G")

songs.forEach(outputSongs);

function outputSongs(song) {
    var updated = [];
    updated = song.replace('>', '-').replace(/[@/\(/!/\*/]/g,'').split('-');
    document.getElementById("songbox").innerHTML += `<h2>${updated}</h2><br>`;
}

})();

(function() {
var newSongs = document.createDocumentFragment();

for (var i = 0; i < updated.length; i++) {
    var headings = newSongs.appendChild(new h1(songs[i]));
}
document.getElementById("songbox").appendChild(msgContainer);
})();



